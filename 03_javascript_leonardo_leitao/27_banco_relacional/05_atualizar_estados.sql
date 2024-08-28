UPDATE cidades
SET nome = 'Juazeiro do Norte'
WHERE cidades.estado_id = 7;

SELECT est.nome
FROM estados est
WHERE sigla = 'MA';

UPDATE estados
SET nome = 'Paraná', populacao = 11.32
WHERE sigla = 'PR';

SELECT est.nome, est.sigla, est.populacao
FROM estados est
WHERE sigla = 'PR';