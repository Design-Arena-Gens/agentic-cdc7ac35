"use client";

import { useState } from "react";
import { CampaignForm } from "@/components/CampaignForm";
import { CampaignResults } from "@/components/CampaignResults";
import { generateCampaign } from "@/lib/agentEngine";
import type { CampaignInput, CampaignOutput } from "@/lib/agentEngine";
import styles from "./page.module.css";

export default function Home() {
  const [result, setResult] = useState<CampaignOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  function handleGenerate(input: CampaignInput) {
    setIsGenerating(true);
    window.requestAnimationFrame(() => {
      const data = generateCampaign(input);
      setResult(data);
      setIsGenerating(false);
    });
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.badge}>AI Revenue Architect</p>
          <h1>
            Deploy a deal-closing psychology stack for your investment offer in
            seconds.
          </h1>
          <p className={styles.subtitle}>
            Feed the agent your investment thesis and it engineers headline hooks,
            channel cadences, and objection counters crafted like the {`world's`} best
            closer.
          </p>
        </header>

        <section className={styles.workspace}>
          <div className={styles.formPane}>
            <CampaignForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
          </div>
          <div className={styles.resultsPane}>
            <CampaignResults data={result} />
          </div>
        </section>
      </main>
    </div>
  );
}
