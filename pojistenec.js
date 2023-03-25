const handleClick = () => {
  const form = document.querySelector("#pojistenec");
  const data = new FormData(form);
  const pojistenec = {};
  for (let [key, value] of data) {
    pojistenec[key] = value;
  }

  if (
    !pojistenec.jmeno &&
    !pojistenec.prijmeni &&
    !pojistenec.vek &&
    !pojistenec.telefon
  ) {
    return;
  }

  const tbody = document.querySelector("#pojistenci");
  const tr = tbody.insertRow();

  const tdJmeno = tr.insertCell();
  const tdJmenoContent = document.createTextNode(
    `${pojistenec.jmeno} ${pojistenec.prijmeni}`
  );
  tdJmeno.appendChild(tdJmenoContent);

  const tdTelefon = tr.insertCell();
  const tdTelefonContent = document.createTextNode(pojistenec.telefon);
  tdTelefon.appendChild(tdTelefonContent);

  const tdVek = tr.insertCell();
  const tdVekContent = document.createTextNode(pojistenec.vek);
  tdVek.appendChild(tdVekContent);

  form.reset();
};
