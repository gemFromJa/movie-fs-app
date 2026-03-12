"use client";

import { useState } from "react";
import type { Actor, CreateActorPayload } from "@/types";
import { createActor } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

interface AddActorFormProps {
  onActorCreated?: (actor: Actor) => void;
}

export function AddActorForm({ onActorCreated }: AddActorFormProps) {
  const { token } = useAuth();
  const [form, setForm] = useState<CreateActorPayload>({
    name: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.gender) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const actor = await createActor(form, token || "");
      setSuccess(true);
      setForm({ name: "", gender: "" });
      onActorCreated?.(actor);
      setTimeout(() => setSuccess(false), 3500);
    } catch (e) {
      setError((e as Error).message ?? "Failed to create actor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "oklch(from var(--color-gold) l c h / 0.05)",
        border: "1px solid oklch(from var(--color-gold) l c h / 0.2)",
        borderRadius: "6px",
        padding: "1.75rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <span
          className="badge"
          style={{
            background: "oklch(from var(--color-gold) l c h / 0.15)",
            color: "var(--color-gold-dark)",
          }}
        >
          Admin
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--color-ink)",
          }}
        >
          Add New Actor
        </h3>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label
            className="section-label"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Name
          </label>
          <input
            className="input"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </div>

        <div>
          <label
            className="section-label"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Gender
          </label>
          <select
            className="input"
            value={form.gender}
            onChange={(e) => setForm((f) => ({ ...f, gender: e.target.value }))}
            required
            style={{ cursor: "pointer" }}
          >
            <option value="">Select…</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {error && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-danger)",
              background: "oklch(from var(--color-danger) l c h / 0.07)",
              border: "1px solid oklch(from var(--color-danger) l c h / 0.2)",
              padding: "0.5rem 0.75rem",
              borderRadius: "3px",
            }}
          >
            {error}
          </p>
        )}

        {success && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "oklch(40% 0.12 145)",
              background: "oklch(97% 0.05 145)",
              border: "1px solid oklch(80% 0.08 145)",
              padding: "0.5rem 0.75rem",
              borderRadius: "3px",
            }}
          >
            ✓ Actor created successfully
          </p>
        )}

        <div>
          <button type="submit" className="btn-gold" disabled={loading}>
            {loading ? "Creating…" : "Create Actor"}
          </button>
        </div>
      </form>
    </div>
  );
}
