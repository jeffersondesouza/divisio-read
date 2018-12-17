import React from 'react';

const SelectBookStatus = ({ value, onChange }) => (
  <div className="select-book-statuss">
    <label>
      <input checked={value==='fechado'} name="status" value="fechado" type="radio" onChange={e => onChange(e.target.value)} />
      <span className="input__label">Fechado</span>
    </label>
    <label>
      <input checked={value==='lendo'} name="status" value="lendo" type="radio" onChange={e => onChange(e.target.value)} />
      <span className="input__label">lendo</span>
    </label>
    <label>
      <input checked={value==='finalizado'} name="status" value="finalizado" type="radio" onChange={e => onChange(e.target.value)} />
      <span className="input__label">Finalizado</span>
    </label>
  </div>
);

export default SelectBookStatus;