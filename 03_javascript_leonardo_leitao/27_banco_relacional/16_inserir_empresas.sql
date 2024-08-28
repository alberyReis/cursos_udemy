ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas (nome, cnpj)
VALUES
  ('Bradesco', 79892012161894),
  ('Vale', 46723697150603),
  ('Cielo', 30511547829146);

DESC empresas;
DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUE (1, 8, 1), (1, 9, 0), (2, 8, 0), (2, 9, 1);