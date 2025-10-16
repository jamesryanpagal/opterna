import Card from "@/components/card";
import Container, { type ContainerProps } from "@/components/container";
import InputGroup, {
  InputPassword,
  TextAreaGroup,
} from "@/components/input-group";
import ThemeCardRadio from "@/components/theme-card-radio";
import {
  Blockquote,
  Text,
  TextSmall,
  Title,
  TitleGradient,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { COLORS } from "@/utils/constants";
import {
  Ban,
  ChevronLeft,
  Image,
  Link,
  Paperclip,
  Search,
  SendHorizonal,
  Trash,
} from "lucide-react";
import type { PropsWithChildren } from "react";

type ComponentCardProps = PropsWithChildren &
  Pick<ContainerProps, "className" | "gap"> & {
    title: string;
  };

const ComponentCard = ({
  title,
  className,
  gap = 10,
  children,
}: ComponentCardProps) => {
  return (
    <Card title={title} className={`w-full ${className}`}>
      <Container padding={0} flexDisplay gap={gap}>
        {children}
      </Container>
    </Card>
  );
};

const ComponentsOverview = () => {
  return (
    <Container padding={20} flexDisplay gap={10}>
      <Container padding={0} className="w-full" flexDisplay alignItems="center">
        <Text>Welcome to</Text>
        <TitleGradient
          className="text-center"
          gradient={[
            COLORS.funBlue,
            COLORS.mediumTorquoise,
            COLORS.tropicalBlue,
          ]}
          level={1}
        >
          Component Overview
        </TitleGradient>
        <ThemeCardRadio className="my-3" />
      </Container>
      <Container
        className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        padding={0}
      >
        <ComponentCard className="row-span-2" title="Typography">
          <Title level={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
          <Separator className="my-2" />
          <Title level={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
          <Separator className="my-2" />
          <Title level={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
          <Separator className="my-2" />
          <Title level={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
          <Separator className="my-2" />
          <Title level={5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Title>
          <Separator className="my-2" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Separator className="my-2" />
          <Blockquote>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Blockquote>
          <Separator className="my-2" />
          <TextSmall>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextSmall>
        </ComponentCard>
        <ComponentCard title="Button">
          <Container className="grid grid-cols-3 gap-3 w-full">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </Container>
          <Separator />
          <Container className="grid grid-cols-3 gap-3 w-full">
            <Button disabled>Primary</Button>
            <Button disabled variant="outline">
              Outline
            </Button>
            <Button disabled variant="ghost">
              Ghost
            </Button>
            <Button disabled variant="link">
              Link
            </Button>
            <Button disabled variant="destructive">
              Destructive
            </Button>
          </Container>
          <Separator />
          <Container className="grid grid-cols-3 gap-3 w-full">
            <Button loading>Primary</Button>
            <Button loading variant="outline">
              Outline
            </Button>
            <Button loading variant="ghost">
              Ghost
            </Button>
            <Button loading variant="link">
              Link
            </Button>
            <Button loading variant="destructive">
              Destructive
            </Button>
          </Container>
          <Separator />
          <Container className="grid grid-cols-3 gap-3 w-full">
            <Button loading disabled>
              Primary
            </Button>
            <Button loading disabled variant="outline">
              Outline
            </Button>
            <Button loading disabled variant="ghost">
              Ghost
            </Button>
            <Button loading disabled variant="link">
              Link
            </Button>
            <Button loading disabled variant="destructive">
              Destructive
            </Button>
          </Container>
          <Separator />
          <Container className="grid grid-cols-3 gap-3 w-full">
            <Button prefix={<SendHorizonal />}>Send</Button>
            <Button prefix={<ChevronLeft />} variant="outline">
              Back
            </Button>
            <Button prefix={<Ban />} variant="ghost">
              Cancel
            </Button>
            <Button prefix={<Link />} variant="link">
              Link
            </Button>
            <Button prefix={<Trash />} variant="destructive">
              Delete
            </Button>
          </Container>
          <Separator />
          <Container
            className="w-full"
            flexDisplay
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={5}
          >
            <Button size="icon">
              <SendHorizonal />
            </Button>
            <Button size="icon" variant="outline">
              <ChevronLeft />
            </Button>
            <Button size="icon" variant="ghost">
              <Ban />
            </Button>
            <Button size="icon" variant="destructive">
              <Trash />
            </Button>
          </Container>
        </ComponentCard>
        <ComponentCard title="Input" gap={20}>
          <Input label="First name" placeholder="John" />
          <Input label="Last name" placeholder="Doe" />
          <Input label="Email" placeholder="johndoe@example.com" required />
          <InputPassword label="Password" />
          <InputGroup placeholder="Search product" prefix={<Search />} />
          <Separator />
          <Textarea label="Feedback" />
          <TextAreaGroup
            label="Send Message"
            placeholder="Write a message"
            postfix={
              <Container
                className="w-full"
                padding={0}
                flexDisplay
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Container
                  padding={0}
                  flexDisplay
                  flexDirection="row"
                  alignItems="center"
                >
                  <Button variant="ghost" size="icon">
                    <Image className="size-5.5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="size-5.5" />
                  </Button>
                </Container>
                <Button className="rounded-full" size="icon">
                  <SendHorizonal className="size-4" />
                </Button>
              </Container>
            }
          />
        </ComponentCard>
        <ComponentCard title="Skeleton">
          <Container
            padding={0}
            flexDisplay
            flexDirection="row"
            gap={5}
            className="w-full"
          >
            <Container padding={0}>
              <Skeleton className="h-[50px] w-[50px] rounded-full" />
            </Container>
            <Container padding={0} flexDisplay gap={5} className="flex-1">
              <Skeleton className="h-5 rounded-sm w-full" />
              <Skeleton className="h-5 rounded-sm w-full" />
              <Skeleton className="h-5 rounded-sm w-full" />
            </Container>
          </Container>
          <Separator />
          <Container padding={0} flexDisplay gap={5} className="w-full">
            <Container
              padding={0}
              flexDisplay
              flexDirection="row"
              gap={5}
              className="w-full"
            >
              <Skeleton className="h-5 rounded-sm flex-1" />
              <Skeleton className="h-5 rounded-sm flex-1" />
              <Skeleton className="h-5 rounded-sm flex-1" />
            </Container>
            <Skeleton className="h-5 rounded-sm w-full" />
            <Skeleton className="h-5 rounded-sm w-full" />
            <Skeleton className="h-5 rounded-sm w-full" />
          </Container>
          <Separator />
          <Container
            padding={0}
            flexDisplay
            flexDirection="row"
            gap={5}
            className="w-full"
          >
            <Container padding={0}>
              <Skeleton className="h-[50px] w-[50px] rounded-full" />
            </Container>
            <Container padding={0} className="w-full" flexDisplay gap={5}>
              <Skeleton className="h-[30px] rounded-sm w-full" />
              <Skeleton className="h-[15px] rounded-sm w-[150px]" />
            </Container>
          </Container>
        </ComponentCard>
        <ComponentCard title="Checkbox, Switch & Radio">
          <Checkbox id="4" label="Accept Terms & Conditions" />
          <Checkbox id="5" label="Subscribe to Newsletter" />
          <Checkbox id="6" label="Enable Notifications" disabled />
          <Separator />
          <Container
            padding={0}
            flexDisplay
            flexDirection="row"
            alignItems="center"
            gap={10}
          >
            <Switch />
            <Switch checked />
            <Switch disabled />
          </Container>
          <Separator />
          <RadioGroup defaultValue="comfortable">
            <Container
              flexDisplay
              flexDirection="row"
              alignItems="center"
              gap={10}
              padding={0}
            >
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </Container>
            <Container
              flexDisplay
              flexDirection="row"
              alignItems="center"
              gap={10}
              padding={0}
            >
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </Container>
            <Container
              flexDisplay
              flexDirection="row"
              alignItems="center"
              gap={10}
              padding={0}
            >
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </Container>
          </RadioGroup>
        </ComponentCard>
      </Container>
    </Container>
  );
};

export default ComponentsOverview;
