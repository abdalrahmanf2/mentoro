"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { User } from "lucide-react";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/lib/constants";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

const formSchema = z
    .object({
        picture: z
            .instanceof(FileList, { message: "Picture is required" })
            .refine((files) => files?.length === 1, "Picture is required.")
            .refine(
                (files) => files?.[0]?.size <= MAX_FILE_SIZE,
                "Max file size is 23MB."
            )
            .refine(
                (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                "Only .jpg, .jpeg, .png and .webp formats are supported."
            ),
        firstName: z.string().min(2, { message: "First name is required" }),
        lastName: z.string().min(2, { message: "Last name is required" }),
        email: z.string().email({ message: "Invalid email address." }),
        password: z
            .string()
            .min(8, { message: "Password must be atleast 8 characters" })
            .max(20, { message: "Password must not exceed 20 characters" })
            .regex(/^(?=.*[A-Z]).*$/, {
                message: "Password must contain 1 Uppercase letter atleast",
            })
            .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>~`_\-+=\\/[\]]).*$/, {
                message: "Password must contain 1 special character atleast",
            }),
        agreeTOS: z.boolean(),
        confirmPassword: z
            .string()
            .min(6, { message: "Confirm password must match password." }),
        location: z.string().min(2, { message: "Location is required" }),
        about: z.string().optional(),
        linkedIn: z.string().min(2, { message: "LinkedIn is required" }),
        github: z.string().min(2, { message: "github is required" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
    });

const RegisterForm = ({ className }: { className?: string }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            location: "",
            about: "",
            agreeTOS: false,
            linkedIn: "",
            github: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    // Handle file preview
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            // Clean up the URL when component unmounts
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setPreview(null);
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={cn("space-y-8", className)}
                >
                    <div className="flex justify-center gap-8">
                        <FaGoogle className="cursor-pointer size-12 p-2 rounded-xl text-brand-200 hover:bg-gray-200/80 transition" />
                        <FaLinkedin className="cursor-pointer size-12 p-2 rounded-xl text-brand-200 hover:bg-gray-200/80 transition" />
                    </div>
                    <div className="text-brand-200 flex flex-col">
                        <hr className="mx-8 border-brand-200" />
                        <span className="inline mx-auto -mt-5 p-2 bg-white">
                            OR
                        </span>
                    </div>
                    <FormField
                        control={form.control}
                        name="picture"
                        render={({ field: { onChange, value, ...field } }) => (
                            <div className="flex items-center gap-4">
                                <div className="size-32 rounded-xl overflow-hidden">
                                    {preview && value ? (
                                        <Image
                                            src={preview}
                                            alt="Preview"
                                            className="object-cover size-full"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                        />
                                    ) : (
                                        <div className="bg-gray-200 object-cover size-full">
                                            <User className="stroke-gray-400 size-full" />
                                        </div>
                                    )}
                                </div>
                                <FormItem>
                                    <FormLabel className="">
                                        Please upload your picture
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            accept={ACCEPTED_IMAGE_TYPES.join(
                                                ","
                                            )}
                                            onChange={(e) => {
                                                onChange(e.target.files);
                                                handleFileChange(e);
                                            }}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Must be not more than 23MB. Supported
                                        formats: JPG, PNG, WebP
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            </div>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-8">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Additional Info</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself (optional)"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="linkedIn"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="LinkedIn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="github"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Github" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <FormField
                            control={form.control}
                            name="agreeTOS"
                            render={({ field }) => (
                                <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Accept terms and conditions
                                        </FormLabel>
                                        <FormDescription>
                                            You agree to our Terms of Service
                                            and Privacy Policy.
                                        </FormDescription>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <Link
                            href="#"
                            className={cn(
                                buttonVariants({ variant: "link" }),
                                "text-muted-foreground"
                            )}
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <Button
                        className="w-full font-bold rounded-xl rounded-br-none"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default RegisterForm;
