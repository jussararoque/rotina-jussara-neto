const toggleBtn = document.getElementById('toggleMensal');
const mensalStatus = document.getElementById('mensalStatus');

let ativo = false;

toggleBtn.addEventListener('click', () => {
  ativo = !ativo;

  if (ativo) {
    mensalStatus.textContent = 'Ativada';
    mensalStatus.className = 'badge';
    toggleBtn.textContent = 'Desativar este mês';
  } else {
    mensalStatus.textContent = 'Planejada';
    mensalStatus.className = 'badge badge-purple';
    toggleBtn.textContent = 'Ativar este mês';
  }
});
