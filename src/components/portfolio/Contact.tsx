import { useForm, ValidationError } from "@formspree/react";
import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "irkullawarrohan@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=irkullawarrohan@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohan",
    href: "https://www.linkedin.com/in/rohan-irkullawar-393484297/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rohan",
    href: "https://github.com/irkullawarrohan-hue",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana — India",
  },
];

export function Contact() {
  const [state, handleSubmit] = useForm("xvzenbke");

  return (
    <Section
      id="contact"
      eyebrow="contact"
      centered
      title="Let's connect."
      intro="Currently seeking DevOps and Cloud Engineer roles. Feel free to reach out for opportunities, collaborations, or technical discussions."
    >
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="flex h-full flex-col gap-3">
            {contacts.map((c) =>
              c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-border">
                      <c.icon size={15} />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </div>

                      <div className="text-xs md:text-sm">{c.value}</div>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </a>
              ) : (
                <div
  key={c.label}
  className="group flex flex-1 items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground/30"
>
  <div className="flex items-center gap-4">
    <div className="grid h-10 w-10 place-items-center rounded-full border border-border">
      <c.icon size={15} />
    </div>

    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {c.label}
      </div>

      <div className="text-xs md:text-sm">{c.value}</div>
    </div>
  </div>

  {/* Invisible placeholder keeps alignment with other cards */}
  <div className="w-4 h-4 flex-shrink-0" />
</div>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />

              <div>
                <Field label="Email" name="email" type="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="mt-4">
              <Field label="Subject" name="subject" />
            </div>

            <div className="mt-4">
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Message
              </label>

              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                placeholder="Tell me about the role or project…"
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {state.submitting
                  ? "Sending..."
                  : state.succeeded
                  ? "Message Sent ✓"
                  : "Send message"}

                <ArrowRight size={15} />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>

      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}