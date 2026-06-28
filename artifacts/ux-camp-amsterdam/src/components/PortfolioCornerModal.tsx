import * as Dialog from "@radix-ui/react-dialog";

const RED = "#B20101";
const DARK = "#333333";
const LIGHT_GREY = "#F5F5F5";
const MID_GREY = "#CCCCCC";
const WHITE = "#FFFFFF";
const FONT = "'Open Sans', sans-serif";

const groundRules = [
  {
    title: "Be Open, Be Kind",
    body: "Everyone here has something interesting to share. Listen with curiosity, and speak with care.",
  },
  {
    title: "Share the Air",
    body: "In groups of 3, make space for everyone — if you've been talking for a bit, invite someone else in.",
  },
  {
    title: "Stay Present",
    body: "No phones or laptops during the rounds — just people.",
  },
  {
    title: "Try to Meet New People",
    body: "We gently challenge you to break out of your bubble — aim for someone new in every round.",
  },
  {
    title: "Have Fun",
    body: "Lean into the weird questions, laugh at the awkward moments, and don't take it too seriously.",
  },
  {
    title: "It's OK to be awkward",
    body: "This is low-pressure. You don't need the perfect intro or clever comment — just show up and be yourself.",
  },
];

type PortfolioCornerModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PortfolioCornerModal({ open, onOpenChange }: PortfolioCornerModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(51,51,51,0.7)",
            zIndex: 100,
          }}
        />
        <Dialog.Content
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(680px, 92vw)",
            maxHeight: "85vh",
            overflowY: "auto",
            background: WHITE,
            borderTop: `4px solid ${RED}`,
            padding: "40px 36px",
            zIndex: 101,
            fontFamily: FONT,
            color: DARK,
          }}
        >
          <Dialog.Title
            style={{
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: 26,
              color: DARK,
              margin: 0,
              marginBottom: 8,
            }}
          >
            Portfolio Corner
          </Dialog.Title>
          <Dialog.Description
            style={{
              fontFamily: FONT,
              fontWeight: 600,
              fontSize: 13,
              color: RED,
              textTransform: "uppercase",
              letterSpacing: 1,
              margin: 0,
              marginBottom: 24,
            }}
          >
            A peer-learning session at UXcamp Amsterdam
          </Dialog.Description>

          <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: DARK, margin: 0, marginBottom: 10 }}>
            Overview
          </h3>
          <p style={{ fontFamily: FONT, fontSize: 15, lineHeight: 1.7, color: DARK, margin: 0, marginBottom: 12 }}>
            Portfolio Corner is a facilitated peer-learning format designed to help UX professionals, students, and career changers improve how they present their work, tell their stories, and communicate their impact.
          </p>
          <p style={{ fontFamily: FONT, fontSize: 15, lineHeight: 1.7, color: DARK, margin: 0, marginBottom: 12 }}>
            Unlike traditional portfolio reviews that position one person as the expert and another as the learner, Portfolio Corner encourages collaborative feedback and discussion. Participants bring their portfolio (or a selected case study), share it with a small group, and receive structured feedback from peers and experienced practitioners.
          </p>
          <p style={{ fontFamily: FONT, fontSize: 15, lineHeight: 1.7, color: DARK, margin: 0, marginBottom: 28 }}>
            The goal is to create a supportive environment where participants can gain actionable insights, discover different approaches to storytelling and presentation, and build confidence in showcasing their work.
          </p>

          <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: DARK, margin: 0, marginBottom: 10 }}>
            Structure of the session
          </h3>
          <p style={{ fontFamily: FONT, fontSize: 15, lineHeight: 1.7, color: DARK, margin: 0, marginBottom: 8 }}>
            Each group consists of:
          </p>
          <ul style={{ margin: 0, marginBottom: 20, paddingLeft: 20, fontSize: 15, lineHeight: 1.7, color: DARK }}>
            <li>1 portfolio presenter</li>
            <li>A small group of reviewers (peers and/or experienced practitioners)</li>
          </ul>

          <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: DARK, margin: 0, marginBottom: 8 }}>
            Flow and timing
          </p>
          <ol style={{ margin: 0, marginBottom: 28, paddingLeft: 20, fontSize: 15, lineHeight: 1.7, color: DARK }}>
            <li style={{ marginBottom: 8 }}>
              <strong>Introduction</strong> — Welcome and explain the rules.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Review rounds</strong> — The presenter shares their portfolio, case study, or selected project, and may highlight a specific challenge or feedback request.
            </li>
            <li>
              <strong>Wrap-up</strong> — Invite reflections and encourage continued chats.
            </li>
          </ol>

          <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: 17, color: DARK, margin: 0, marginBottom: 12 }}>
            General ground rules
          </h3>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {groundRules.map((rule) => (
              <li
                key={rule.title}
                style={{
                  padding: "12px 0",
                  borderBottom: `1px solid ${MID_GREY}`,
                }}
              >
                <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: DARK, margin: 0, marginBottom: 4 }}>
                  {rule.title}
                </p>
                <p style={{ fontFamily: FONT, fontSize: 14, lineHeight: 1.6, color: DARK, margin: 0 }}>
                  {rule.body}
                </p>
              </li>
            ))}
          </ul>

          <Dialog.Close
            aria-label="Close"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: LIGHT_GREY,
              border: `1px solid ${MID_GREY}`,
              color: DARK,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            ✕
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
