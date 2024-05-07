TABLE morador{
  cpf INTEGER [PRIMARY KEY]
  nome VARCHAR(60)
  endereco VARCHAR (80)
  senha CHAR(8)
  telefone VARCHAR(14)
}

TABLE rota{
  id_rota INTEGER [PRIMARY KEY]
  nome VARCHAR(100)
  veiculo_placa CHAR(7)
  data DATE
  horario_inicio TIME
  horario_fim time
  status VARCHAR(100)
}

TABLE coleta{
  id_coleta INTEGER [PRIMARY KEY]
  data DATE
  hora TIME
  local VARCHAR(100)
  verifica_coleta VARCHAR(100)
  morador_id INTEGER [REF: - morador.cpf]
  rota_id INTEGER [REF: - rota.id_rota]
}

TABLE residuo{
  id_residuo INTEGER [PRIMARY KEY]
  tipo VARCHAR(60)
  categoria VARCHAR(80)
  instrucao_separacao VARCHAR(100)
  cashback DECIMAL
  verificacao_descarte BOOL
}

TABLE morador_rota{
  id_morador_rota INTEGER [PRIMARY KEY]
  morador_id INTEGER [REF: > morador.cpf]
  rota_id INTEGER [REF: > rota.id_rota]

}

TABLE coleta_residuo{
  id_coleta_residuo INTEGER [PRIMARY KEY]
  coleta_id INTEGER [REF:> coleta.id_coleta]
  residuo_id INTEGER [REF: > residuo.id_residuo]
}