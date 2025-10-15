/**
 * Forneça o valor menor primeiro
 * 
 * Como segundo parametro forneca o numero maior que vai ser o objetivo 
 */

export default function percentageAchieved(achieved: number, goal: number) {
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
