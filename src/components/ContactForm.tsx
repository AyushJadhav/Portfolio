import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mlgzpknn");

  if (state.succeeded) {
    return (
      <p className="rounded-xl bg-green-100 px-12 py-10 text-4xl font-extrabold text-green-700">
  Thanks for contacting me!
</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white p-6 text-neutral-950 shadow-2xl md:p-8"
    >
      <h2 className="mb-6 text-2xl font-bold">Contact me</h2>

      <div className="grid gap-5">
        <input name="name" placeholder="Name" required className="rounded-xl border px-4 py-3" />
        <input name="email" type="email" placeholder="Email" required className="rounded-xl border px-4 py-3" />
        <input name="phone" placeholder="Phone" className="rounded-xl border px-4 py-3" />
        <input name="subject" placeholder="Subject" required className="rounded-xl border px-4 py-3" />
        <textarea name="message" placeholder="Message" required className="min-h-36 rounded-xl border px-4 py-3" />
      </div>

      <button
  type="submit"
  disabled={state.submitting}
  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-5 py-3 font-semibold text-white hover:bg-cyan-600 disabled:opacity-70"
>
  {state.submitting && (
    <svg
      className="h-5 w-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  )}

  {state.submitting ? "Sending..." : "Submit"}
</button>
    </form>
  );
}