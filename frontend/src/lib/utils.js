/**
 * Utility function to conditionally join classNames together
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

/**
 * Format currency values
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (default: 'INR')
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount)
}

/**
 * Get a formatted date string
 * @param {Date|string} date - Date to format
 * @param {object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Intl.DateTimeFormat("en-IN", {
    ...defaultOptions,
    ...options,
  }).format(new Date(date))
}

/**
 * Generate a slug from a string
 * @param {string} str - String to convert to slug
 * @returns {string} URL-friendly slug
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

/**
 * Capitalize the first letter of each word in a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

/**
 * Generate meta description based on text content
 * @param {string} content - The content to extract description from
 * @param {number} maxLength - Maximum length for the description
 * @returns {string} Meta description
 */
export function generateMetaDescription(content, maxLength = 160) {
  // Remove HTML tags if present
  const plainText = content.replace(/<[^>]+>/g, "")
  return truncateText(plainText, maxLength)
}
