"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants";
import { Textarea } from "./ui/textarea";
import { useCallback, useState } from "react";
import { Link2, Plus, Trash } from "lucide-react";
import AddLinkForm, { addLinkFormSchema } from "./AddLinkForm";
import { Link } from "@/lib/types";

const MAX_FILE_SIZE = 24 * 1024 * 1024; // 24MB

const formSchema = z.object({
    resourceName: z.string().min(2, { message: "Resource Name is required." }),
    category: z.string().min(2, { message: "Category is required." }),
    description: z.string().min(2, { message: "Description is required." }),
    content: z
        .array(z.instanceof(File))
        .min(1, { message: "At least one file is required" })
        .refine(
            (files) => files.every((file) => file.size <= MAX_FILE_SIZE),
            "Each file must be less than 24MB"
        ),
    links: z.array(z.object({ description: z.string(), link: z.string() })),
});

interface AddResourceFormProps {
    className?: string;
    defaultValues?: z.infer<typeof formSchema>;
}

const AddResourceForm = ({
    className,
    defaultValues = {
        resourceName: "",
        category: "",
        description: "",
        content: [],
        links: [],
    },
}: AddResourceFormProps) => {
    const [files, setFiles] = useState<File[]>([]);
    const [links, setLinks] = useState<Link[]>([]);
    const [addLinkModalOpen, setAddLinkModalOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Make sure to include the files in the submission
        const formData = {
            ...values,
            content: files,
        };
        console.log("Form submitted:", formData);
    };

    const onAddLink = (values: z.infer<typeof addLinkFormSchema>) => {
        setLinks((prev) => [...prev, values]);

        form.setValue("links", links, {
            shouldValidate: true,
        });

        setAddLinkModalOpen(false);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: useCallback(
            (acceptedFiles: File[]) => {
                setFiles((prev) => [...prev, ...acceptedFiles]);
                form.setValue("content", acceptedFiles, {
                    shouldValidate: true,
                });
            },
            [form]
        ),
        multiple: true,
    });

    const removeFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);
        form.setValue("content", updatedFiles, { shouldValidate: true });
    };

    const removeLink = (index: number) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setLinks(updatedLinks);
        form.setValue("links", updatedLinks, { shouldValidate: true });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("space-y-8", className)}
            >
                <FormField
                    control={form.control}
                    name="resourceName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Resource Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {CATEGORIES.map((category) => (
                                        <SelectItem
                                            key={category.name}
                                            value={category.name}
                                        >
                                            <category.Icon className="inline mb-1 mr-2 size-4" />
                                            <span>{category.name}</span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={() => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <div
                                    {...getRootProps()}
                                    className={cn(
                                        "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer",
                                        isDragActive
                                            ? "border-primary"
                                            : "border-gray-300",
                                        "hover:border-primary transition-colors"
                                    )}
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p>Drop the files here...</p>
                                    ) : (
                                        <p>
                                            Drag and drop files here, or click
                                            to select files
                                        </p>
                                    )}
                                </div>
                            </FormControl>

                            {/* File List */}
                            {files.length > 0 && (
                                <div className="mt-4 space-y-2">
                                    {files.map((file, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                        >
                                            <div className="flex items-center space-x-2">
                                                <span className="text-sm">
                                                    {file.name}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    (
                                                    {(
                                                        file.size /
                                                        1024 /
                                                        1024
                                                    ).toFixed(2)}{" "}
                                                    MB)
                                                </span>
                                            </div>
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={() =>
                                                    removeFile(index)
                                                }
                                            >
                                                <Trash />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <FormDescription>
                                Upload PDF, Docx, Video Files (Max 24MB each)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="links"
                    render={() => (
                        <FormItem>
                            <div className="flex justify-between">
                                <FormLabel>Links</FormLabel>
                                <FormControl>
                                    <Dialog
                                        open={addLinkModalOpen}
                                        onOpenChange={setAddLinkModalOpen}
                                    >
                                        <DialogTrigger asChild>
                                            <Button>
                                                <Plus />
                                                Add Links
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Add Link
                                                </DialogTitle>
                                            </DialogHeader>
                                            <AddLinkForm onSubmit={onAddLink} />
                                        </DialogContent>
                                    </Dialog>
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {links.length > 0 && (
                    <div className="mt-4 space-y-2">
                        {links.map((link, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between p-2 bg-gray-50 rounded"
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm inline-flex gap-2 items-center">
                                        <Link2 />
                                        {link.description}
                                    </span>
                                </div>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => removeLink(idx)}
                                >
                                    <Trash />
                                </Button>
                            </div>
                        ))}
                    </div>
                )}

                <Button
                    className="w-full font-bold rounded-xl rounded-br-none"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default AddResourceForm;
