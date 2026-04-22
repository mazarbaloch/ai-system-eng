export function getLinkProps(destination: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(destination) || destination.startsWith('mailto:')) {
    return {href: destination};
  }

  return {to: destination};
}
