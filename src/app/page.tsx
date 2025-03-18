import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home"); // Kullanıcıyı "/home" sayfasına yönlendir
}
