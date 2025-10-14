export default function percentageAchieved(goal: number, achieved: number) {
  if (goal === 0) {
    return "Meta indefinida";
  }

  if (achieved === 0) {
    return "Ainda não iniciado";
  }

  const percent = (achieved / goal) * 100;

  if (percent >= 100) {
    return "Meta atingida";
  }

  return `${percent.toFixed(0)}% concluído`;
}
