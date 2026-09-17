import takeOrderScreen from "../assets/take-order.jpeg";
import drawerTopScreen from "../assets/dashboard.jpeg";
import drawerBottomScreen from "../assets/order-management.jpeg";
import pushNotificationScreen from "../assets/notifications.jpeg";
import notificationListScreen from "../assets/menu-items.jpeg";
import kioskInactiveScreen from "../assets/stock-items.jpeg";
import MarketingClose from "./MarketingClose";
import FeaturesShowcase from "./FeaturesShowcase";

const sections = [
  {
    eyebrow: "STS RMS Nepal",
    headline: "Best restaurant management software & ordering app in Nepal",
    description:
      "A complete restaurant software solution for Nepal. Features self-ordering kiosk mode, waiter POS app, NPR VAT billing, real-time KOT display, recipe costing, and station security.",
    image: takeOrderScreen,
    alt: "STS RMS Best Restaurant Software Nepal Take Order screen",
  },
  {
    eyebrow: "Fast Order Taking & POS",
    headline: "Dine-in, takeaway, table picker, cash & QR payments",
    description:
      "The intuitive POS screen allows restaurant staff in Nepal to manage dine-in and takeaway tables, track cart subtotals, apply discounts, and fire orders instantly.",
    image: takeOrderScreen,
    alt: "Restaurant management app Nepal take order screen with table picker and cart",
  },
  {
    eyebrow: "Unified Restaurant Management System",
    headline: "Complete RMS operations in one centralized drawer",
    description:
      "Everything a restaurant owner in Nepal needs: Dashboard analytics, Live Orders, Billing, Menu Catalog, Inventory Management, Purchasing, and Setup.",
    image: drawerTopScreen,
    alt: "Best RMS Nepal navigation drawer menu",
  },
  {
    eyebrow: "Menu, Recipes, Stock & Staff",
    headline: "Full recipe costing and automated inventory control",
    description:
      "Categories, variations, per-item ingredient recipes, unit deductions (grams/pieces), vendor purchases, table layouts, and staff access roles.",
    image: drawerBottomScreen,
    alt: "Restaurant software Nepal inventory and staff management",
  },
  {
    eyebrow: "Live Kitchen Alerts & KOT",
    headline: "Orders arrive as instant kitchen notifications",
    description:
      "Real-time kitchen order tickets (KOT) with table numbers, modifier notes, and order timers keep cooking staff synchronized with zero delays.",
    image: pushNotificationScreen,
    alt: "Restaurant software live KOT push notification Nepal",
  },
  {
    eyebrow: "Centralized Order Status",
    headline: "Track preparing, ready, and completed orders",
    description:
      "Live order pipelines display elapsed time, table number, order amount in NPR, and instant stage transitions for smooth kitchen-to-table service.",
    image: notificationListScreen,
    alt: "Restaurant management app live order status screen",
  },
  {
    eyebrow: "Secure Multi-Station Terminals",
    headline: "Station-level credential authorization",
    description:
      "Each ordering kiosk and POS station requires secure authentication before processing orders, protecting your restaurant's billing and business data.",
    image: kioskInactiveScreen,
    alt: "STS RMS secure kiosk terminal activation screen",
  },
];

export default function ReducedMotionFallback() {
  return (
    <div className="min-h-screen bg-void text-warm-white">
      <nav className="sticky top-0 z-50 border-b border-warm-white/10 bg-void/90 px-6 py-4 backdrop-blur md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/sts_logo.png"
              alt="STS Logo"
              className="h-7 w-7 rounded-sm object-cover"
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-warm-white/75">
              STS Kiosk
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-warm-white/15 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-white/60"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        {sections.map((section, index) => (
          <section
            key={`${section.eyebrow}-${index}`}
            className="px-6 py-20 md:px-12 lg:px-20"
          >
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
              <div className={index % 2 === 0 ? "" : "md:order-2"}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
                  {section.eyebrow}
                </p>
                <h1 className="mt-5 text-4xl font-normal leading-tight text-white md:text-6xl">
                  {section.headline}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-warm-white/65">
                  {section.description}
                </p>
              </div>

              <div className={index % 2 === 0 ? "" : "md:order-1"}>
                <div className="mx-auto max-w-[320px] rounded-[28px] border border-warm-white/10 bg-black p-2 shadow-2xl shadow-black/60">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="aspect-[738/1600] w-full rounded-[22px] object-cover"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <FeaturesShowcase />
      <MarketingClose />
    </div>
  );
}
