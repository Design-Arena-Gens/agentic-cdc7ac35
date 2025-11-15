import type { CampaignOutput } from "@/lib/agentEngine";

export interface CampaignResultsProps {
  data: CampaignOutput | null;
}

export function CampaignResults({ data }: CampaignResultsProps) {
  if (!data) {
    return (
      <section className="placeholder">
        <h2>Psychology playbook will appear here</h2>
        <p>
          Feed the agent rich detail about your audience, proof, and promise. The
          boardroom-grade action plan will be reverse-engineered instantly.
        </p>
      </section>
    );
  }

  return (
    <section className="results">
      <div className="result-card spotlight">
        <h2>Core Narrative</h2>
        <p>{data.coreNarrative}</p>
      </div>

      <div className="result-grid">
        <article className="result-card">
          <h3>Elevator Pitch</h3>
          <p>{data.elevatorPitch}</p>
        </article>
        <article className="result-card">
          <h3>Positioning Angle</h3>
          <p>{data.positioningAngle}</p>
        </article>
        <article className="result-card">
          <h3>Proof Narrative</h3>
          <p>{data.socialProof}</p>
        </article>
      </div>

      <div className="result-grid">
        <article className="result-card">
          <h3>Psychology Stack</h3>
          <ul>
            {data.psychologyTriggers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="result-card">
          <h3>Objection Counters</h3>
          <ul>
            {data.objectionHandlers.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <section className="blueprint">
        <header>
          <h2>Channel Conversion Blueprint</h2>
          <p>Roll out across channels with precision cadences and biasing triggers.</p>
        </header>
        <div className="blueprint-grid">
          {data.conversionBlueprint.map((blueprint) => (
            <article className="result-card" key={blueprint.channel}>
              <h3>{blueprint.channel}</h3>
              <p className="headline">{blueprint.headline}</p>
              <p>{blueprint.messaging}</p>
              <p className="cta">CTA: {blueprint.callToAction}</p>
              <p className="cadence">Cadence: {blueprint.cadence}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nurture">
        <header>
          <h2>Nurture Sequence</h2>
          <p>Layer conviction over two weeks to close decisive capital commitments.</p>
        </header>
        <ol>
          {data.nurtureFlow.map((step) => (
            <li key={step.step}>
              <div className="nurture-step">
                <div>
                  <span className="nurture-step__title">{step.step}</span>
                  <span className="nurture-step__timing">{step.timing}</span>
                </div>
                <p className="nurture-step__objective">{step.objective}</p>
                <p>{step.message}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="metrics result-card">
        <h2>Metrics That Matter</h2>
        <ul>
          {data.metricFocus.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
