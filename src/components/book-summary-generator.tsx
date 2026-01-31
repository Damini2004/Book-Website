"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { generateSummaryAction } from "@/app/book-proposal/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Loader2, FileText, UploadCloud, AlertCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" suppressHydrationWarning>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
        </>
      ) : (
        "Generate Summary"
      )}
    </Button>
  );
}

export function BookSummaryGenerator() {
  const [state, formAction] = useFormState(generateSummaryAction, {});
  const [file, setFile] = useState<File | null>(null);
  const [fileDataUrl, setFileDataUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setFileDataUrl(loadEvent.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    if (state.summary || state.error) {
        setFile(null);
        setFileDataUrl(null);
        formRef.current?.reset();
    }
  }, [state]);

  return (
    <Card className="bg-background">
        <CardHeader>
            <CardTitle className="font-headline text-2xl">AI-Powered Book Summary Tool</CardTitle>
            <CardDescription>
                Upload a draft chapter or manuscript outline (.txt, .md) to generate a concise summary. This tool can help you refine your book's focus before submitting a full proposal.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="file-upload">Upload Document</Label>
                    <div className="relative">
                        <Input 
                            id="file-upload" 
                            name="file-upload-input" 
                            type="file" 
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            accept=".txt,.md,.pdf,.docx"
                            suppressHydrationWarning
                        />
                        <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-8 text-center bg-secondary/30">
                           <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                           {file ? (
                                <p className="mt-2 text-sm text-primary font-semibold">{file.name}</p>
                           ) : (
                                <p className="mt-2 text-sm text-muted-foreground">Click or drag file to this area to upload</p>
                           )}
                        </div>
                    </div>

                    {fileDataUrl && <input type="hidden" name="file" value={fileDataUrl} />}
                </div>

                <SubmitButton />
            </form>

            {state.error && (
                 <Alert variant="destructive" className="mt-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                </Alert>
            )}

            {state.summary && (
                <div className="mt-6">
                    <h3 className="font-headline text-xl font-semibold mb-2 flex items-center">
                        <FileText className="mr-2 h-5 w-5"/> Generated Summary
                    </h3>
                    <div className="prose prose-sm dark:prose-invert max-w-none p-4 border rounded-lg bg-secondary/30">
                        <p>{state.summary}</p>
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
