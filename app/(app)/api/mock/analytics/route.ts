import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    window: {
      dateFrom: "2025-12-11T00:00:00Z",
      dateTo: "2025-12-12T12:00:00Z"
    },
    summary: {
      pageViews: 12450,
      uniqueVisitors: 8310,
      sessions: 9800,
      avgSessionDurationSeconds: 145,
      bounceRate: 0.52,
      signupConversion: 0.18
    },
    topPages: [
      { path: "/", title: "Home", views: 5200, bounceRate: 0.33, avgTimeOnPage: 72 },
      { path: "/signup", title: "Signup", views: 3800, bounceRate: 0.62, avgTimeOnPage: 54 },
      { path: "/checkout", title: "Checkout", views: 2100, bounceRate: 0.48, avgTimeOnPage: 98 },
      { path: "/pricing", title: "Pricing", views: 350, bounceRate: 0.28, avgTimeOnPage: 120 }
    ],
    funnels: {
      signupFlow: {
        steps: [
          { name: "visit signup", count: 3800 },
          { name: "fill form", count: 1200 },
          { name: "confirm email", count: 850 }
        ],
        conversionRate: 0.223
      },
      checkoutFlow: {
        steps: [
          { name: "add to cart", count: 600 },
          { name: "start checkout", count: 420 },
          { name: "complete purchase", count: 210 }
        ],
        conversionRate: 0.35
      }
    },
    trends: {
      signupDrop: true,
      signupDropPercent: 28,
      errorSpikeRelated: true,
      trafficChange: "stable"
    },
    samples: [
      { time: "2025-12-12T11:30:00Z", pageViews: 450, signups: 8, errors: 12 },
      { time: "2025-12-12T11:15:00Z", pageViews: 520, signups: 3, errors: 20 },
      { time: "2025-12-12T11:00:00Z", pageViews: 410, signups: 6, errors: 5 }
    ]
  });
}

