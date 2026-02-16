export type CTAType = "primary" | "secondary" | "link"

export type CTA = {
    label: string,
    type?: CTAType
}

export type Link = {
    label: string,
    url: string
}
