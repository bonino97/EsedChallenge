const mapResultWithValidFamily = (result) => {
    return result.map((item) => {
        const { tag, category, family, mass_unit, weight_unit, weight, mass } = item;
        const validFamily = family || category || tag;
        const validMassUnit = mass_unit || weight_unit;
        const validMass = mass || weight;
        return {
            name: item.name,
            path: item.path,
            mass: Number(validMass || 0),
            mass_unit: validMassUnit,
            family: validFamily,
            user: item.user || 'anonymous'
        }
    });
}

module.exports = { mapResultWithValidFamily };