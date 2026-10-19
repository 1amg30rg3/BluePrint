// Studio that designed and built this site — shown in the footer credit.
export const agency = {
  name: 'WebSavvys',
  url: 'https://websavvys.com/',
  badge: '/images/websavvys-logo.png',
  founder: 'Giorgi Gavasheli',
}

// Agency link tagged so referrals from this site show up in the agency's analytics.
export function agencyCreditUrl(source) {
  const url = new URL(agency.url)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', 'referral')
  url.searchParams.set('utm_campaign', 'site-credit')
  return url.toString()
}
