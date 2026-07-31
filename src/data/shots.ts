/* Real Bvive product screenshots, keyed for reuse across pages.
   Alt text describes what the screen shows, not just what it is called. */
import type { ImageMetadata } from "astro";

import paymentRecovery from "../assets/product/payment-recovery.png";
import arrearsManagement from "../assets/product/arrears-management.png";
import cancellationsCompleted from "../assets/product/cancellations-completed.png";
import cancellationsPending from "../assets/product/cancellations-pending.png";
import cancellationNote from "../assets/product/cancellation-note.png";
import cancellationReview from "../assets/product/cancellation-review.png";
import leadProfile from "../assets/product/lead-profile.png";
import prospectsDatabase from "../assets/product/prospects-database.png";
import leadPipeline from "../assets/product/lead-pipeline.png";
import salesAnalytics from "../assets/product/sales-analytics.png";
import logSalesCall from "../assets/product/log-sales-call.png";
import leadLinks from "../assets/product/lead-links.png";
import leadCapturePage from "../assets/product/lead-capture-page.png";
import analyticsOverview from "../assets/product/analytics-overview.png";
import analyticsPayments from "../assets/product/analytics-payments.png";
import analyticsStaff from "../assets/product/analytics-staff.png";
import taskBoard from "../assets/product/task-board.png";
import usersStaff from "../assets/product/users-staff.png";
import dashboardHome from "../assets/product/dashboard-home.png";
import automationOverdue from "../assets/product/automation-overdue.png";
import automationAppointment from "../assets/product/automation-appointment.png";

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export const shots = {
  paymentRecovery: {
    src: paymentRecovery,
    alt: "The Bvive overdue payments ledger, showing each failed direct debit with its instalment, reversal reason, days overdue, due date and overdue status.",
  },
  arrearsManagement: {
    src: arrearsManagement,
    alt: "Arrears management in Bvive, listing overdue accounts with amounts, catch-up totals, overdue status and the date each member was last contacted.",
  },
  cancellationsCompleted: {
    src: cancellationsCompleted,
    alt: "Completed cancellation requests in Bvive, each with an outcome such as Save, Action 30 Days or Paid CXL Fee, plus the final direct debit date and who actioned it.",
  },
  cancellationsPending: {
    src: cancellationsPending,
    alt: "The pending cancellations queue in Bvive, showing the member, request date and time, assigned staff member and a feedback form link.",
  },
  cancellationNote: {
    src: cancellationNote,
    alt: "Logging a cancellation call in Bvive, capturing a summary, the call outcome and a next step such as Action 30 Days, Save or Debt Collection.",
  },
  cancellationReview: {
    src: cancellationReview,
    alt: "A member's cancellation history in Bvive, with the contact log, submitted feedback form responses, cancellation reason and an experience rating.",
  },
  leadProfile: {
    src: leadProfile,
    alt: "A lead record in Bvive, combining contact details, status, call and message counts, next appointment and a full timeline of logged notes.",
  },
  prospectsDatabase: {
    src: prospectsDatabase,
    alt: "The Bvive prospects database, listing every lead with phone, email, status, source, tags and created date, with bulk actions available.",
  },
  leadPipeline: {
    src: leadPipeline,
    alt: "The Bvive lead pipeline board, with leads grouped into scheduled actions, new, hot, warm and cold columns and dragged between stages.",
  },
  salesAnalytics: {
    src: salesAnalytics,
    alt: "Bvive sales analytics, showing conversion, booking, show and contact rates alongside a lead conversion funnel and a breakdown of lead sources.",
  },
  logSalesCall: {
    src: logSalesCall,
    alt: "Logging a sales call in Bvive, recording the outcome, notes, a scheduled appointment and optional follow-up by SMS or email.",
  },
  leadLinks: {
    src: leadLinks,
    alt: "The Bvive lead link generator, creating campaign URLs that auto-capture leads, with views, conversions and status listed per campaign.",
  },
  leadCapturePage: {
    src: leadCapturePage,
    alt: "A Bvive lead capture landing page, pairing a gym photograph with a short form for name, phone, email and preferred contact method.",
  },
  analyticsOverview: {
    src: analyticsOverview,
    alt: "The Bvive analytics overview, with active members, total overdue amount, overdue status counts, task counts and cancellation resolution figures.",
  },
  analyticsPayments: {
    src: analyticsPayments,
    alt: "Payment analytics in Bvive, charting daily revenue and transactions over thirty days alongside payment method and membership term splits.",
  },
  analyticsStaff: {
    src: analyticsStaff,
    alt: "Staff performance reporting in Bvive, comparing call attempts, conversations, voicemails, payments taken and tasks completed per team member.",
  },
  taskBoard: {
    src: taskBoard,
    alt: "The Bvive task board, grouping follow-up tasks by high, medium and low priority with the member, due date and assigned staff on each card.",
  },
  usersStaff: {
    src: usersStaff,
    alt: "User management in Bvive, listing every staff account with its role, active status and controls to view, edit or remove the user.",
  },
  dashboardHome: {
    src: dashboardHome,
    alt: "The Bvive dashboard, summarising revenue, overdue balance, leads, cancellations, pending tasks and appointments with an activity trend chart.",
  },
  automationOverdue: {
    src: automationOverdue,
    alt: "An automation in Bvive that triggers on a spreadsheet upload, branches on overdue status and sends a templated email and SMS.",
  },
  automationAppointment: {
    src: automationAppointment,
    alt: "An appointment reminder automation in Bvive, triggered when a lead is created and filtered by source before an SMS is sent.",
  },
} satisfies Record<string, Shot>;

export type ShotKey = keyof typeof shots;

/* Which screenshot represents each solution's mock variant. */
export const solutionShot: Record<string, ShotKey> = {
  recovery: "paymentRecovery",
  arrears: "arrearsManagement",
  cancellation: "cancellationsCompleted",
  crm: "leadProfile",
  analytics: "analyticsOverview",
  tasks: "taskBoard",
};

/* One screen per industry tab on the homepage, so clicking through the tabs
   shows a different part of the product rather than the same image relabelled.
   These render small, so each pick favours big tiles and cards over dense rows. */
export const industryShot: Record<string, ShotKey> = {
  "gyms-fitness": "dashboardHome",
  childcare: "analyticsOverview",
  "allied-health": "cancellationsCompleted",
  education: "taskBoard",
  subscription: "salesAnalytics",
};
