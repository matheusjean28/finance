/**
 * Retorna quantos dias faltam até o vencimento.
 * Se o vencimento já passou, retorna número negativo.
 */
export function getDaysUntilDue(dueDateString: string): number {
  const today = new Date();
  const dueDate = new Date(dueDateString); // converte a string em Date

  // zera as horas para comparar apenas as datas (sem hora/minuto)
  today.setHours(0, 0, 0, 0);
  dueDate.setHours(0, 0, 0, 0);

  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
