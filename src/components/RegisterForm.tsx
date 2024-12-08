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

const formSchema = z
    .object({
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
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
    });

const RegisterForm = ({ className }: { className?: string }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            location: "",
            agreeTOS: false,
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
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
