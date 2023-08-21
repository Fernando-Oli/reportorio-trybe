-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT box.domestic_sales, box.international_sales, M.title
FROM pixar.box_office AS box
INNER JOIN pixar.movies AS M
ON M.id = box.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de 
-- vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT box.domestic_sales, box.international_sales, M.title
FROM pixar.box_office AS box
INNER JOIN pixar.movies AS M
ON box.movie_id = M.id
WHERE domestic_sales < international_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT box.rating, M.title
FROM pixar.box_office AS box
INNER JOIN pixar.movies AS M
ON box.movie_id = M.id;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, 
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. 
-- Retorne os nomes dos cinemas em ordem alfabética.

SELECT th.name, M.title
FROM pixar.theater AS th
LEFT JOIN pixar.movies AS M
ON th.id = M.theater_id;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que 
-- não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT M.id, M.title, M.director, M.year, M.length_minutes, M.theater_id, th.name
FROM pixar.theater AS th
RIGHT JOIN pixar.movies AS M
ON th.id = M.theater_id;


