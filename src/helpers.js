export function getYearDifference(year) {
  return (new Date).getFullYear() - year;
}

export function calculateBrand(brand, basePrice) {
  let increment;

  switch (brand) {
    case 'european':
      increment = basePrice * 0.3;
      break;
    case 'american':
      increment = basePrice * 0.15;
      break;
    case 'asian':
      increment = basePrice * 0.05;
      break;
    default:
      increment = undefined;
  }

  return increment;
}

export function calculatePlan(plan, basePrice) {
  if (plan === 'basic') {
    return basePrice * 0.2;
  } else if (plan === 'full') {
    return basePrice * 0.5;
  }

  return undefined;
}

export function getBrandName(brand) {
  let brandName;

  switch (brand) {
    case 'american':
      brandName = 'Americano';
      break;
    case 'european':
      brandName = 'Europeo';
      break;
    case 'asian':
      brandName = 'Asiático';
      break;
    default:
      brandName = undefined;
      break;
  }

  return brandName;
}

export function getPlanName(plan) {
  let planName;

  switch (plan) {
    case 'basic':
      planName = 'Básico';
      break;
    case 'full':
      planName = 'Completo';
      break;
    default:
      planName = undefined;
      break;
  }

  return planName;
}
