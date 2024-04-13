import { useForm } from "react-hook-form";
import { ContactFormType, contactFormSchema } from "@/validators/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { HEAR_ABOUT_US, INQUIRY_TYPE } from "@/data/contact-form";
import { Checkbox } from "@/components/ui/checkbox";

export function ContactForm() {
    const form = useForm<ContactFormType>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            inquiryType: undefined,
            hearAboutUs: undefined,
            email: "",
            terms: undefined,
        },
    });
    const { toast } = useToast();

    function onSubmit(values: ContactFormType) {
        toast({
            variant: "success",
            title: `Hello ${values.firstName} ${values.lastName}, your message has been sent, we will get back to you within 24 hours.`,
            duration: 7_000,
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-6 rounded-xl border p-5 md:grid-cols-2 md:gap-10 md:p-10 lg:grid-cols-3"
            >
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter First Name" {...field} />
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
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Last Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your Email" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Phone Number (US)" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Inquiry Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Inquiry Type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {INQUIRY_TYPE.map((type, i) => (
                                        <SelectItem key={i} value={type}>
                                            {type}
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
                    name="hearAboutUs"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How Did You Hear About Us?</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {HEAR_ABOUT_US.map((value, i) => (
                                        <SelectItem key={i} value={value}>
                                            {value}
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
                    name="message"
                    render={({ field }) => (
                        <FormItem className="col-span-full">
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your Message here."
                                    className="resize-y"
                                    {...field}
                                ></Textarea>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="col-span-full flex flex-col items-center justify-between gap-6 md:flex-row">
                    <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex items-center gap-3">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            Use different settings for my mobile devices
                                        </FormLabel>
                                    </div>
                                </div>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full md:w-fit">
                        Send Your Message
                    </Button>
                </div>
            </form>
        </Form>
    );
}
