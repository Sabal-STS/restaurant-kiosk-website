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
    eyebrow: "STS Kiosk",
    headline: "The restaurant ordering app",
    description:
      "A kiosk and admin interface for taking dine-in or takeaway orders, managing restaurant operations, receiving order alerts, and activating each station before use.",
    image: takeOrderScreen,
    alt: "STS Kiosk Take Order screen",
  },
  {
    eyebrow: "Take Order",
    headline: "Dine-in, takeaway, tables, payment, and cart",
    description:
      "The Take Order screen shows Dine In and Takeaway, table selection, Cash payment, menu categories, cart quantity controls, subtotal, and Place Order.",
    image: takeOrderScreen,
    alt: "Take Order screen with table picker and cart",
  },
  {
    eyebrow: "Everything Managed",
    headline: "Restaurant operations in the drawer",
    description:
      "The drawer exposes Dashboard, Orders, Billing, Menu Catalog, Inventory Management, Purchasing, Restaurant Setup, and Sign out.",
    image: drawerTopScreen,
    alt: "STS Kiosk navigation drawer top",
  },
  {
    eyebrow: "Menu, Inventory, Purchasing, Setup",
    headline: "The second drawer capture shows the rest",
    description:
      "Menu Items, Categories, Variations, Modifiers, Stock & Inventory, Measurement Units, Purchases, Vendors, Tables, Kiosks, and Staff are visible across the two drawer screenshots.",
    image: drawerBottomScreen,
    alt: "STS Kiosk navigation drawer lower items",
  },
  {
    eyebrow: "Real-Time Orders",
    headline: "Orders arrive as alerts",
    description:
      "The push notification shows STS Kiosk, New Order, order number, status, table, and rupee amount.",
    image: pushNotificationScreen,
    alt: "STS Kiosk live order push notification",
  },
  {
    eyebrow: "Notifications",
    headline: "Orders remain visible in-app",
    description:
      "The notifications list shows order number, status, type, table, amount, time, Mark all read, and Clear.",
    image: notificationListScreen,
    alt: "STS Kiosk notifications list",
  },
  {
    eyebrow: "Secure by Design",
    headline: "Each station starts inactive",
    description:
      "The Kiosk Inactive screen requires username, password, company code, and kiosk code before Activate Kiosk.",
    image: kioskInactiveScreen,
    alt: "STS Kiosk inactive activation screen",
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
