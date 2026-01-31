import { redirect } from "react-router";

export function loader() {
  return redirect("/reporting");
}

export default function Home() {
  return null;
}
