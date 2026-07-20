import { useState, useRef, useEffect, useCallback } from "react";

import dashboardImg from "../assets/dashboard.jpeg";
import menuItemsImg from "../assets/menu-items.jpeg";
import menuRecipeModifierImg from "../assets/menu-recipe-modifier.jpeg";
import menuVariationPricingImg from "../assets/menu-variation-pricing.jpeg";
import menuVariationsImg from "../assets/menu-variations.jpeg";
import notificationsImg from "../assets/notifications.jpeg";
import orderManagementImg from "../assets/order-management.jpeg";
import purchaseImg from "../assets/purchase.jpeg";
import stockItemsImg from "../assets/stock-items.jpeg";
import takeOrderImg from "../assets/take-order.jpeg";

interface Feature {
  id: string;
  image: string;
  title: string;
  badge: string;
  badgeIcon: string;
  description: string;
  highlights: string[];
}

const FEATURES: Feature[] = [
  {
    id: "dashboard",
    image: dashboardImg,
    title: "Dashboard Overview",
    badge: "Analytics",
    badgeIcon: "📊",
    description:
      "Your restaurant's command center. See today's total orders (5), completed orders (4), cancelled count, and active tables (1/7) at a glance. The Inventory Summary section below surfaces low stock items (5), out-of-stock alerts (3), and healthy stock — all filterable by Today, Yesterday, or This Week.",
    highlights: [
      "Order & table KPI cards",
      "Inventory health summary",
      "Time-range filtering",
    ],
  },
  {
    id: "take-order",
    image: takeOrderImg,
    title: "Take Order Interface",
    badge: "POS",
    badgeIcon: "🛒",
    description:
      "A visually rich point-of-sale screen for staff. Toggle between Dine In and Takeaway, then browse a photo-grid of menu items — Coke (Rs. 50), Chocolate Dunot (Rs. 100), Chocolate Cake (Rs. 200), Vanilla Ice Cream (Rs. 150). Filter by Burger, Pizza, Chicken, Beverages, or Desserts. Search by name for instant lookup.",
    highlights: [
      "Dine In / Takeaway toggle",
      "Photo-grid product cards",
      "Category & search filtering",
    ],
  },
  {
    id: "order-management",
    image: orderManagementImg,
    title: "Live Order Tracking",
    badge: "Kitchen Ops",
    badgeIcon: "🍳",
    description:
      "Every live order on one screen. Order #ORD-4FA254A7 — Table 6, Classic Burger (Normal), Rs. 180, PROCESSING. Each card shows order ID, table, items, variant, price, and elapsed time. Tap Preparing → Ready → Completed to advance the pipeline. Filter by All (2), Preparing (0), or Ready (0).",
    highlights: [
      "Order status pipeline",
      "One-tap stage transitions",
      "Table, items & price detail",
    ],
  },
  {
    id: "menu-items",
    image: menuItemsImg,
    title: "Menu Catalog",
    badge: "Menu",
    badgeIcon: "📋",
    description:
      "Full control over your restaurant's offerings. Each row displays the item image, name, category badge (Soft Drinks, Desserts), and price (Rs. 50 – Rs. 200). Hit '+ New Item' to create, the pencil icon to edit, or the trash icon to delete. Search by name and filter by All Items, Burger, Pizza, or Chicken.",
    highlights: [
      "CRUD operations per item",
      "Category badges & pricing",
      "Search + category filter bar",
    ],
  },
  {
    id: "menu-variation-pricing",
    image: menuVariationPricingImg,
    title: "Variant Pricing Setup",
    badge: "Config",
    badgeIcon: "⚙️",
    description:
      "Define variant groups like Size and set per-option prices. For Pepsi (Base Price: Rs. 50), create Normal (Rs. 50), Large (Rs. 100), and Extra Large (Rs. 150). Mark variants as 'Required' so customers must choose. A separate 'Serve Type' group can be set to 'Not Assigned' for optional use.",
    highlights: [
      "Normal / Large / XL sizing",
      "Per-option price override",
      "Required vs optional toggles",
    ],
  },
  {
    id: "menu-variations",
    image: menuVariationsImg,
    title: "Variant Stock Deduction",
    badge: "Inventory Link",
    badgeIcon: "🔗",
    description:
      "See exactly how much stock each variant consumes. Large: Extra Adjustment 2.0 pc → Total Reduction 3.0 pc. Normal: Extra 1.0 pc → Total 2.0 pc. Extra Large: Extra 40.0 pc → Total 41.0 pc. When an order uses a variant, the system auto-deducts the correct quantity from inventory.",
    highlights: [
      "Per-variant deduction rules",
      "Extra adjustment amounts",
      "Auto inventory sync on order",
    ],
  },
  {
    id: "menu-recipe-modifier",
    image: menuRecipeModifierImg,
    title: "Modifiers & Recipes",
    badge: "Advanced",
    badgeIcon: "🧪",
    description:
      "Two powerful systems in one view. Modifier Groups let you assign optional add-ons — Toppings (multiple selection) and Extra (multiple selection) — to any item. Below, Recipe Management defines the Base Recipe: Pepsi uses 1.0 pc per sale. Add ingredients via '+ Add Ingredient' for auto stock deduction.",
    highlights: [
      "Toppings & Extras modifiers",
      "Base recipe per item",
      "Auto deduction on every sale",
    ],
  },
  {
    id: "stock-items",
    image: stockItemsImg,
    title: "Stock Inventory",
    badge: "Inventory",
    badgeIcon: "📦",
    description:
      "Four status cards: Total Items (10), Healthy Stock (5), Low Stock (5), Out of Stock (3). Below, the searchable list shows Pepsi — Soft Drinks, 63.0 pc; Basmati Rice — Rice, 21000.0 g; Thakali Rice — Rice, 0.0 g (flagged 'Low Stock' in red). Add new stock via '+ Add Stock Item'.",
    highlights: [
      "4-card health summary",
      "Quantity + unit per item",
      "Low stock red flag alerts",
    ],
  },
  {
    id: "purchase",
    image: purchaseImg,
    title: "Purchase Management",
    badge: "Procurement",
    badgeIcon: "💰",
    description:
      "Log and track every vendor purchase. Bill #313123 — Rs. 1,130 from Abc Sweets, with VAT Rs. 130 and CASH payment on Jul 15, 2026. Summary cards at top show Total Purchases (0) and Total Amount (Rs. 0.00) for the current filter. Filter by Today, Yesterday, This Week. Hit 'Record Purchase' to add new bills.",
    highlights: [
      "Bill-level VAT breakdown",
      "Vendor & payment tracking",
      "Date-range purchase filters",
    ],
  },
  {
    id: "notifications",
    image: notificationsImg,
    title: "Order Notifications",
    badge: "Alerts",
    badgeIcon: "🔔",
    description:
      "Real-time push alerts for every order event. Order #ORD-32ACD1B9 — Status: PROCESSING, Type: DINE_IN, Table: Table 7, Rs. 250.00, received at 12:25. Each notification card shows all key details at a glance. 'Mark all read' and 'Clear' buttons help manage the notification queue.",
    highlights: [
      "Push alerts with order details",
      "Status, type & table info",
      "Mark read / clear actions",
    ],
  },
];

/* ─── Intersection Observer hook ───────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─── Feature Card ─────────────────────────────────────────────────── */
function FeatureCard({
  feature,
  index,
  onOpenLightbox,
}: {
  feature: Feature;
  index: number;
  onOpenLightbox: (feature: Feature) => void;
}) {
  const { ref, visible } = useInView();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`fc ${visible ? "fc--in" : ""}`}
      style={{ "--fc-delay": `${index * 60}ms` } as React.CSSProperties}
    >
      {/* Decorative number watermark */}
      <span className="fc__watermark" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className={`fc__layout ${isEven ? "" : "fc__layout--flip"}`}>
        {/* Phone */}
        <div className="fc__device" onClick={() => onOpenLightbox(feature)}>
          <div className="fc__device-frame">
            <div className="fc__device-notch" />
            <img
              src={feature.image}
              alt={feature.title}
              className="fc__device-screen"
              loading="lazy"
            />
            <div className="fc__device-glare" />
          </div>
          <div className="fc__device-reflection" />
        </div>

        {/* Content */}
        <div className="fc__body">
          <div className="fc__meta">
            <span className="fc__badge">
              <span className="fc__badge-icon">{feature.badgeIcon}</span>
              {feature.badge}
            </span>
            <span className="fc__num">{String(index + 1).padStart(2, "0")} / {String(FEATURES.length).padStart(2, "0")}</span>
          </div>
          <h3 className="fc__title">{feature.title}</h3>
          <p className="fc__desc">{feature.description}</p>
          <ul className="fc__tags">
            {feature.highlights.map((h) => (
              <li key={h} className="fc__tag">
                <span className="fc__tag-dot" />
                {h}
              </li>
            ))}
          </ul>
          <button
            className="fc__cta"
            onClick={() => onOpenLightbox(feature)}
            aria-label={`View ${feature.title} fullscreen`}
          >
            <span>View Fullscreen</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Lightbox ─────────────────────────────────────────────────────── */
function Lightbox({
  feature,
  onClose,
}: {
  feature: Feature | null;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!feature) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [feature, handleClose]);

  if (!feature) return null;

  return (
    <div className="lb" ref={overlayRef} onClick={handleClose}>
      <div className="lb__inner" onClick={(e) => e.stopPropagation()}>
        <button className="lb__close" onClick={handleClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="lb__phone">
          <div className="lb__phone-notch" />
          <img src={feature.image} alt={feature.title} className="lb__phone-img" />
        </div>
        <div className="lb__info">
          <span className="fc__badge">
            <span className="fc__badge-icon">{feature.badgeIcon}</span>
            {feature.badge}
          </span>
          <h3 className="lb__title">{feature.title}</h3>
          <p className="lb__desc">{feature.description}</p>
          <ul className="fc__tags">
            {feature.highlights.map((h) => (
              <li key={h} className="fc__tag">
                <span className="fc__tag-dot" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ──────────────────────────────────────────────────── */
export default function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState<Feature | null>(null);
  const { ref: headerRef, visible: headerVisible } = useInView(0.2);

  return (
    <section
      id="features"
      className="fs"
      style={{ backgroundColor: "#0A0A08" }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className={`fs__header ${headerVisible ? "fs__header--in" : ""}`}
      >
        <div className="fs__kicker-row">
          <div className="fs__kicker-line" />
          <span className="fs__kicker">Platform Screenshots</span>
          <div className="fs__kicker-line" />
        </div>
        <h2 className="fs__heading">
          Every screen,{" "}
          <span className="fs__heading-dim">designed to perform.</span>
        </h2>
        <p className="fs__sub">
          Explore all 10 screens of the STS Kiosk platform. Tap any screenshot
          for a closer look.
        </p>
        <div className="fs__count-badge">
          <span className="fs__count-number">10</span>
          <span className="fs__count-label">Screens</span>
        </div>
      </div>

      {/* Grid */}
      <div className="fs__grid">
        {FEATURES.map((feature, i) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            index={i}
            onOpenLightbox={setActiveFeature}
          />
        ))}
      </div>

      <Lightbox feature={activeFeature} onClose={() => setActiveFeature(null)} />
    </section>
  );
}
