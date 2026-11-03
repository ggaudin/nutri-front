export const formaterDate = (date) => {
    const [annee, mois, jour] = date.split("-");
    return `${jour}/${mois}/${annee}`;
};

export const calculerAge = (dateNaissance) => {
    const [annee, mois, jour] = dateNaissance.split("-").map(Number);

    const aujourdhui = new Date();

    let age = aujourdhui.getFullYear() - annee;

    const anniversairePasEncorePasse =
        aujourdhui.getMonth() + 1 < mois ||
        (aujourdhui.getMonth() + 1 === mois &&
            aujourdhui.getDate() < jour);

    if (anniversairePasEncorePasse) {
        age--;
    }

    return age;
};