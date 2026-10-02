"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Clock, AlertCircle } from "lucide-react";
import { COMPANY, PROJECT_TYPES, BUDGET_RANGES } from "@/lib/data";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import FormField from "@/components/ui/FormField";
import MagneticButton from "@/components/ui/MagneticButton";

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  location: string;
  message: string;
  consent: boolean;
};

const INITIAL_STATE: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  location: "",
  message: "",
  consent: false,
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) next.fullName = "Este campo es obligatorio.";
    if (!form.email.trim()) next.email = "Este campo es obligatorio.";
    else if (!isValidEmail(form.email)) next.email = "Ingrese un correo electrónico válido.";
    if (!form.phone.trim()) next.phone = "Este campo es obligatorio.";
    else if (!isValidPhone(form.phone)) next.phone = "Ingrese un teléfono válido.";
    if (!form.projectType) next.projectType = "Seleccione un tipo de proyecto.";
    if (!form.message.trim()) next.message = "Cuéntenos brevemente sobre su proyecto.";
    if (!form.consent) next.consent = "Debe autorizar el tratamiento de sus datos.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.05) reject(new Error("network"));
          else resolve(true);
        }, 1200);
      });
      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="relative bg-carbon py-28 md:py-40">
      <div className="container-px mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <span className="label-sm text-bronze">Contacto</span>
              <h2 className="heading-lg mt-6 text-4xl text-paper md:text-5xl">
                Hablemos de su próximo proyecto.
              </h2>
              <p className="mt-6 max-w-md text-architect">
                Cuéntenos qué tiene en mente y nuestro equipo se pondrá en contacto
                con usted.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-14 space-y-6">
              <div className="flex items-start gap-4">
                <Phone size={18} className="mt-1 text-bronze" strokeWidth={1.5} />
                <div>
                  <p className="label-sm text-architect">Teléfono</p>
                  <p className="mt-1 text-paper">{COMPANY.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="mt-1 text-bronze" strokeWidth={1.5} />
                <div>
                  <p className="label-sm text-architect">Correo</p>
                  <p className="mt-1 text-paper">{COMPANY.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-bronze" strokeWidth={1.5} />
                <div>
                  <p className="label-sm text-architect">Ubicación</p>
                  <p className="mt-1 text-paper">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} className="mt-1 text-bronze" strokeWidth={1.5} />
                <div>
                  <p className="label-sm text-architect">Horario de atención</p>
                  <p className="mt-1 text-paper">{COMPANY.hours}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-h-[420px] flex-col items-center justify-center border border-white/10 p-10 text-center"
                  >
                    <CheckCircle2 size={48} className="text-bronze" strokeWidth={1.25} />
                    <h3 className="font-display mt-6 text-2xl text-paper">
                      Solicitud enviada.
                    </h3>
                    <p className="mt-3 max-w-sm text-architect">
                      Gracias por contactarnos. Nuestro equipo revisará su
                      solicitud y se pondrá en contacto a la brevedad.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="label-sm mt-8 border border-white/20 px-6 py-3 text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
                    >
                      Enviar otra solicitud
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        label="Nombre completo"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={(v) => update("fullName", v)}
                        error={errors.fullName}
                      />
                      <FormField
                        label="Empresa"
                        name="company"
                        value={form.company}
                        onChange={(v) => update("company", v)}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(v) => update("email", v)}
                        error={errors.email}
                      />
                      <FormField
                        label="Teléfono"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(v) => update("phone", v)}
                        error={errors.phone}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        as="select"
                        label="Tipo de proyecto"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={(v) => update("projectType", v)}
                        options={PROJECT_TYPES}
                        placeholder="Seleccionar"
                        error={errors.projectType}
                      />
                      <FormField
                        as="select"
                        label="Presupuesto estimado"
                        name="budget"
                        value={form.budget}
                        onChange={(v) => update("budget", v)}
                        options={BUDGET_RANGES}
                        placeholder="Seleccionar"
                      />
                    </div>

                    <FormField
                      label="Ubicación del proyecto"
                      name="location"
                      value={form.location}
                      onChange={(v) => update("location", v)}
                    />

                    <FormField
                      as="textarea"
                      label="Mensaje"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(v) => update("message", v)}
                      error={errors.message}
                      placeholder="Cuéntenos sobre su proyecto..."
                    />

                    <div>
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          className="mt-1 h-4 w-4 shrink-0 border-white/30 bg-transparent accent-[#B89B5E]"
                        />
                        <span className="text-sm text-architect">
                          Autorizo el tratamiento de mis datos personales.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-2 text-xs text-red-400">{errors.consent}</p>
                      )}
                    </div>

                    {status === "error" && (
                      <div className="flex items-start gap-3 border border-red-400/30 bg-red-400/5 p-4">
                        <AlertCircle size={18} className="mt-0.5 text-red-400" />
                        <p className="text-sm text-red-300">
                          Ocurrió un error al enviar su solicitud. Intente
                          nuevamente.
                        </p>
                      </div>
                    )}

                    <MagneticButton
                      variant="solid"
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full justify-center"
                    >
                      {status === "submitting" ? "Enviando..." : "Solicitar cotización"}
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
