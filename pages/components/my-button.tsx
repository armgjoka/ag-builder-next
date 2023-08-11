import { Builder, Button } from "@builder.io/react";

type MyProps = { content: string; link: string }

// Any component in your codebase
export default function MyButton(props: MyProps) {
  return <Button href={props.link}>{props.content}</Button>
}