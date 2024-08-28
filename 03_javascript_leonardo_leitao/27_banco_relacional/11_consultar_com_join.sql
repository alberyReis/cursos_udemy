SELECT e.nome AS estado, c.nome AS cidade, regiao 
FROM estados e, cidades c
WHERE e.id = c.estado_id;

SELECT c.nome as Cidade, e.nome AS Estado, regiao AS Região
FROM estados e
INNER JOIN cidades c ON e.id = c.estado_id;