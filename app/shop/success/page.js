import Link from "next/link";
export default function SuccessPage() {
  return (
    <main>
      <h1>Order confirmed</h1>
      <p>
        Thank you for your purchase. You will receive a confirmation email
        shortly.
      </p>
      <Link href="/shop">Back to shop</Link>
    </main>
  );
}
