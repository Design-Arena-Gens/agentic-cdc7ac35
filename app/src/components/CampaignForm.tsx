"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type {
  CampaignChannel,
  CampaignInput,
  CampaignTone,
} from "@/lib/agentEngine";

export interface CampaignFormProps {
  onGenerate: (input: CampaignInput) => void;
  isGenerating: boolean;
}

const defaultInput: CampaignInput = {
  strategyName: "Quantum Yield Compass",
  strategyPromise: "compounding mid-double-digit returns with institutional-grade downside control",
  audienceProfile: "high-net-worth tech founders",
  painPoints: "volatile markets, decision fatigue, and idle cash drag",
  desiredOutcome: "confidently deploy capital into a future-proof allocation",
  proofPoints: "10-year audited performance, Goldman alumni investment committee, and co-investment with regulated funds",
  tone: "Trusted Advisor",
  primaryChannel: "LinkedIn",
  investmentHorizon: "Medium",
  actionWindow: "30 Days",
};

const toneOptions: CampaignTone[] = [
  "Bold Disruptor",
  "Trusted Advisor",
  "Data-Driven Analyst",
  "Visionary Guide",
];

const channelOptions: CampaignChannel[] = [
  "Email",
  "LinkedIn",
  "Webinar",
  "Paid Ads",
  "Lead Magnet",
  "Nurture Sequence",
];

const horizonOptions: CampaignInput["investmentHorizon"][] = [
  "Short",
  "Medium",
  "Long",
];

const actionOptions: CampaignInput["actionWindow"][] = [
  "Immediate",
  "30 Days",
  "90 Days",
];

export function CampaignForm({ onGenerate, isGenerating }: CampaignFormProps) {
  const [formValues, setFormValues] = useState<CampaignInput>(defaultInput);

  function updateField<K extends keyof CampaignInput>(key: K, value: CampaignInput[K]) {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onGenerate(formValues);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="field">
          <span>Strategy name</span>
          <input
            aria-label="Strategy name"
            value={formValues.strategyName}
            onChange={(event) => updateField("strategyName", event.target.value)}
            required
          />
        </label>
        <label className="field">
          <span>Strategy promise</span>
          <textarea
            aria-label="Strategy promise"
            value={formValues.strategyPromise}
            onChange={(event) => updateField("strategyPromise", event.target.value)}
            rows={2}
            required
          />
        </label>
        <label className="field">
          <span>Audience profile</span>
          <textarea
            aria-label="Audience profile"
            value={formValues.audienceProfile}
            onChange={(event) => updateField("audienceProfile", event.target.value)}
            rows={2}
            required
          />
        </label>
        <label className="field">
          <span>Core pain points</span>
          <textarea
            aria-label="Pain points"
            value={formValues.painPoints}
            onChange={(event) => updateField("painPoints", event.target.value)}
            rows={2}
            required
          />
        </label>
        <label className="field">
          <span>Desired outcome</span>
          <textarea
            aria-label="Desired outcome"
            value={formValues.desiredOutcome}
            onChange={(event) => updateField("desiredOutcome", event.target.value)}
            rows={2}
            required
          />
        </label>
        <label className="field">
          <span>Proof points</span>
          <textarea
            aria-label="Proof points"
            value={formValues.proofPoints}
            onChange={(event) => updateField("proofPoints", event.target.value)}
            rows={2}
            required
          />
        </label>
        <label className="field">
          <span>Psychological tone</span>
          <select
            aria-label="Tone"
            value={formValues.tone}
            onChange={(event) => updateField("tone", event.target.value as CampaignTone)}
          >
            {toneOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Primary acquisition channel</span>
          <select
            aria-label="Primary channel"
            value={formValues.primaryChannel}
            onChange={(event) =>
              updateField("primaryChannel", event.target.value as CampaignChannel)
            }
          >
            {channelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Investment horizon</span>
          <div className="segmented">
            {horizonOptions.map((option) => (
              <button
                type="button"
                key={option}
                className={
                  option === formValues.investmentHorizon
                    ? "segment active"
                    : "segment"
                }
                onClick={() => updateField("investmentHorizon", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </label>
        <label className="field">
          <span>Action window</span>
          <div className="segmented">
            {actionOptions.map((option) => (
              <button
                type="button"
                key={option}
                className={
                  option === formValues.actionWindow ? "segment active" : "segment"
                }
                onClick={() => updateField("actionWindow", option)}
              >
                {option}
              </button>
            ))}
          </div>
        </label>
      </div>
      <button className="submit" type="submit" disabled={isGenerating}>
        {isGenerating ? "Calibrating psychology stack..." : "Launch conversion blueprint"}
      </button>
    </form>
  );
}
