
"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ChevronDown, ChevronRight, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  price?: string;
  itemName?: string;
  itemType?: string;
};

type GetColumnsProps = {
    onEdit: (proposal: BookProposal) => void;
    onDelete: (proposal: BookProposal) => void;
}

const ExpandedDetail = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="grid grid-cols-4 gap-2 text-sm">
    <strong className="col-span-1 text-right">{label}:</strong>
    <div className="col-span-3">{value}</div>
  </div>
);

export const getColumns = ({ onEdit, onDelete }: GetColumnsProps): ColumnDef<BookProposal>[] => [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "bookTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Book Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "submissionDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submission Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "expand",
    cell: ({ row }) => {
      return (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => row.toggleExpanded(!row.getIsExpanded())}
        >
          {row.getIsExpanded() ? (
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
            <DropdownMenuItem onClick={() => onEdit(proposal)}>
                Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(proposal)} className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                Delete
            </DropdownMenuItem>
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
            <ExpandedDetail label="Price" value={row.original.price ? `₹${row.original.price}`: 'N/A'} />
            <ExpandedDetail label="Item Name" value={row.original.itemName || 'N/A'} />
            <ExpandedDetail label="Item Type" value={row.original.itemType || 'N/A'} />
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
