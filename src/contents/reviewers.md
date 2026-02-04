---
layout: ../layouts/ContentLayout.astro
title: "Reviewer Guidelines"
---

# Reviewer Guidelines

If you have any doubts throughout the review process, please contact the corresponding AC.
Please use the commenting function on OpenReview and make sure the authors are not part of the readers.

## Important Dates

- **Review period begins:** 21 March 2026
- **Review period ends:** 14 April 2026
- **Reviews released to authors:** 17 April 2026
- **Author rebuttal due:** 24 April 2026 (11:59 PM AoE)
- **Author-reviewer discussion (including private reviewer-AC discussion):**  24 April–1 May 2026
- **AC metareview due:** 3 May 2026 (11:59 PM AoE)

## Guidelines

### Area 1: Probabilistic and/or Bayesian ML Methods 

We welcome methodological and theoretical contributions in advancing the foundations of probabilistic machine learning, Bayesian statistics, and decision-making under uncertainty. 
We also encourage work exploring connections between these fields and adjacent areas such as deep learning, natural language processing, active learning, reinforcement learning, compression, AI safety, scientific computing, and causal inference.
Relevant topics include, but are not limited to:

- **Approximate inference:** variational inference, Monte Carlo methods, expectation propagation, Laplace approximations, normalizing flows.
- **Model development:** Bayesian neural networks, Gaussian processes, probabilistic graphical models, state-space models, hierarchical models, and structured probabilistic models.
- **Uncertainty quantification:** calibration, out-of-distribution detection, uncertainty decomposition, conformal prediction.
- **Theory:** convergence guarantees, approximation quality, PAC-Bayesian theory.
- **Decision-making under uncertainty:** Bayesian optimization, active learning, experimental design, multi-armed bandits, and distributional/Bayesian reinforcement learning, planning, and search under uncertainty.
- **Scalability and efficiency:** amortized methods, federated learning.
- **Connections to modern ML:** Bayesian deep learning, uncertainty in foundation models, and uncertainty-aware generative AI.

Submissions in this area will be evaluated on:

- **Methodological or theoretical contribution:** What new inference methods, modeling frameworks, or theoretical insights does the work provide? How does it advance the state of the art?
- **Technical rigor:** Are the methods theoretically grounded? Are claims supported by proofs, formal analysis, or rigorous numerical validation?
- **Empirical validation:** When applicable, how is the method evaluated? Are experiments well-designed with appropriate baselines, metrics, and datasets?
- **Clarity and reproducibility:** Is the work clearly presented with sufficient detail for reproducibility?

### Area 2 (New!): Applications of Probabilistic and/or Bayesian Methods to Healthcare and Climate Change

For this new focus area, we aim to foster stronger communication and collaboration between researchers developing probabilistic/Bayesian machine learning methodology and researchers focused primarily on real-world applications. As such, in this area, novel methodology/theory is **not** an evaluation criterion (though it is always welcome). Instead, we encourage submissions that:
- Propose **thoughtful, rigorous** uses of probabilistic/Bayesian models or inference, with clear **empirical and scientific evidence for why** the chosen methodology is well-aligned with the downstream task.
- Use probabilistic/Bayesian methods to **advance scientific understanding**, for example, by **carefully integrating** domain expertise, physical constraints, or mechanistic knowledge into the modeling and inference pipeline.
- Tackle applications where problems **cannot (or should not) be addressed solely by scaling up data and deep learning models**, such as data-sparse regimes, high-stakes decision making, causal reasoning, or settings with strict interpretability, safety, or governance requirements.

We welcome a broad range of application-driven contributions in this track, including but not limited to:
- **Clinical and public health applications**, such as diagnosis and prognosis under uncertainty, individualized treatment recommendations, clinical trial design and monitoring, health policy evaluation, infectious disease modeling, and resource allocation in healthcare systems.
- **Climate and environmental applications**, such as climate model calibration and emulation, extreme event modeling, uncertainty quantification in climate projections, climate-informed decision support, environmental risk assessment, and integration of physical and data-driven models.
- **Decision-making under uncertainty**, including Bayesian decision analysis, optimal experimental design, adaptive policies, and decision support tools for practitioners and policymakers.
- **Model critique, validation, and robustness in real systems**, focusing on model misspecification, distributional shifts, reliability in deployment, and principled communication of uncertainty to stakeholders.

Submissions in this area will be evaluated on:

- **The real-world problem and its impact:** Why is this problem important for healthcare or climate change? Who are the stakeholders, and what decisions or outcomes does the work aim to influence?
- **The role of probabilistic/Bayesian methods:** Why are probabilistic/Bayesian approaches particularly well-suited (or necessary) for this application? How does the approach leverage uncertainty, prior knowledge, causal structure, or domain constraints?
- **Empirical and scientific validation:** How is the proposed approach evaluated (e.g., predictive performance, calibration, decision quality, robustness, interpretability)?
- What **evidence** is provided that the method improves understanding, decisions, or outcomes relative to existing practice?
- When applicable, **practical considerations and deployment**: how does the work engage with real data, real users, or real systems? What are the limitations, assumptions, and open challenges for practical deployment?