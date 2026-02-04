"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";

export type BookProposal = {
  id: string;
  fullName: string;
  bookTitle: string;
  submissionDate: string;
  biography: string;
  aimsAndScope: string;
  usp: string;
  targetAudience: string[];
  toc: string;
};

const ExpandedDetail = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="grid grid-cols-4 gap-2 text-sm">
    <strong className="col-span-1 text-right">{label}:</strong>
    <div className="col-span-3">{value}</div>
  </div>
);

export const columns: ColumnDef<BookProposal>[] = [
  {
    accessorKey: "fullName",
    header: "Author Name",
  },
  {
    accessorKey: "bookTitle",
    header: "Book Title",
  },
  {
    accessorKey: "submissionDate",
    header: "Submission Date",
  },
  {
    id: "expand",
    cell: ({ row }) => {
      const { toggleRowExpanded, getIsExpanded } = row;
      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => toggleRowExpanded(!getIsExpanded())}
        >
          {getIsExpanded() ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      );
    },
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const proposal = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(proposal.id)}
            >
              Copy proposal ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const renderSubComponent = ({ row }: { row: any }) => {
    return (
      <div className="p-4 bg-muted/50">
        <div className="space-y-2">
            <ExpandedDetail label="Biography" value={row.original.biography} />
            <ExpandedDetail label="Aims & Scope" value={row.original.aimsAndScope} />
            <ExpandedDetail label="Unique Selling Points" value={row.original.usp} />
            <ExpandedDetail 
                label="Target Audience" 
                value={
                    <div className="flex flex-wrap gap-1">
                        {row.original.targetAudience.map((audience: string) => (
                            <Badge key={audience} variant="secondary">{audience}</Badge>
                        ))}
                    </div>
                } 
            />
            <ExpandedDetail label="Table of Contents" value={<p className="whitespace-pre-wrap">{row.original.toc}</p>} />
        </div>
      </div>
    );
};
