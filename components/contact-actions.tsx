"use client"

export default function ContactActions() {
  const phoneNumber = "+212652768993"
  const whatsappNumber = "212652768993"
  const email = "contact@prestigia-agency.com"
  const mapsUrl =
    "https://maps.google.com/?q=Bld+Qods+The+Gold+Center+Casablanca+Ain+Chock"

  const actions = [
    {
      label: "📞 Appeler",
      href: `tel:${phoneNumber}`,
    },
    {
      label: "💬 WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
    },
    {
      label: "📧 Email",
      href: `mailto:${email}?subject=Demande%20d'information%20-%20Prestigia%20Agency`,
    },
    {
      label: "📍 Localisation",
      href: mapsUrl,
    },
  ]

  return (
    <div className="mt-10 flex flex-wrap gap-3 justify-center">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-accent text-background text-sm font-semibold hover:bg-accent/90 hover:scale-105 transition-transform transition-colors"
        >
          {action.label}
        </a>
      ))}
    </div>
  )
}
