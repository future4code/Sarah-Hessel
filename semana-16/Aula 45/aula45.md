/* ------ Aula 45 ------ */


SET SQL_SAFE_UPDATES = 0;    /* Safe Update - Desabilita o modo de segurança que permite que so alteramos dados pelo ID
							   se mudar para '1' true, ativa o modo. */

ALTER TABLE Actor 
ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor 
ADD type VARCHAR(255) DEFAULT "NotDirector";

SELECT * FROM Actor;

/* Questão 1 */

-- a) O codigo está acessando a tabela Actor e fazendo uma alteração, apagando sua coluna salary.
-- b) O codigo está fazendo uma alteração na coluna gender, mudando seu nome para sex aceitando 6 caracteres.
-- c) O codigo está fazendo uma alteração na coluna gender, permanecendo seu nome e alterando seu maximo de caracter para 255.
-- d) 
	ALTER TABLE Actor 
    CHANGE gender gender VARCHAR(100);


/* Questão 2 */

-- a) 
	UPDATE Actor
		SET birth_date = '1974-12-17', name = "Sarah Paulson"
        WHERE id = "3";
-- b) 
	INSERT INTO Actor (id, name, salary, birth_date, gender)
		VALUES(
        4, 
        'Juliana Paes',
        500000, 
        '1979-03-26',
        'Female'
        );
	UPDATE Actor 
		SET name="JULIANA PÃES"
        WHERE id = "4";
	UPDATE Actor 
		SET name="Juliana Paes"
        WHERE id = "4";
-- c)
	UPDATE Actor 
		SET name = "Jessica Lange", salary=900000, birth_date="1949-04-20", gender="Female"
        WHERE id = "5";
-- d)
	UPDATE Actor 
		SET favorite_color = "Black"
        WHERE id = "6";
-- error : Error Code: 1054. Unknown column 'favorite_color' in 'field list'


/* Questão 3 */

-- a) 
	DELETE FROM Actor
		WHERE id = "2";
-- b)
	DELETE FROM Actor
	WHERE
	gender = "Male" AND
	salary > 1000000;
    
    
/* Questão 4 */

-- a) Retorna o maior salario
	SELECT MAX(salary) FROM Actor;
    
-- b) Retorna o menor salario entre as atrizes
	SELECT MIN(salary) FROM Actor
		WHERE gender = "Female";
        
-- c) Retorna a quantidade de atrizes
	SELECT COUNT(*) FROM Actor
		WHERE gender = "Female" OR "female";
        
-- d) Retorna a soma salarial de todos.
	SELECT SUM(salary) FROM Actor;


/* Questão 5 */

-- a) A query abaixo organizará a quantidade de atores pelo seu respectivo genero.
	SELECT COUNT(*), gender
		FROM Actor
		GROUP BY gender;
        
-- b) Ordena os nomes em ordem decrescente 
	SELECT id, name FROM Actor
		ORDER BY name DESC;
        
-- c) Ordena os salarios em ordem decrescente
	SELECT * FROM Actor 
		ORDER BY salary DESC;
        
-- d) Ordena os salarios em ordem decrescente e limita o retorno para 3 atores.
	SELECT * FROM Actor
		ORDER BY salary DESC
        LIMIT 3;
        
-- e) Retorna a media salarial dividida em grupos por genero.
	SELECT AVG(salary), gender FROM Actor
		GROUP BY gender;


/* Questão 6 */

CREATE TABLE Filme(
	id VARCHAR(255) PRIMARY KEY UNIQUE,
    name VARCHAR(255) NOT NULL,
    sinopse VARCHAR(255) NOT NULL, 
    data_de_lançamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

SELECT * FROM Filme;

-- a) 
	ALTER TABLE Filme
		ADD  nos_cinemas_ate DATE;
	ALTER TABLE Filme
		CHANGE nos_cinemas_ate nos_cinemas_ate ENUM("Em cartaz", "Fora", "Ainda vai lançar"); -- era pra usar Date, fiz cagada
        
-- b) Mudança de tipo da coluna 'avaliacao'
	ALTER TABLE Filme
		CHANGE avaliacao avaliacao FLOAT;
        
-- c)Inserção de filmes

	INSERT INTO Filme(id, name, sinopse, data_de_lançamento, avaliacao)
		VALUES(
        1, 
        'Annabelle', 
        'John Form acha que encontrou o presente ideal para sua esposa grávida, uma boneca vintage do mal. No entanto, a alegria do casal não dura muito.',
        '2014-10-09',
        5
        );

        INSERT INTO Filme(id, name, sinopse, data_de_lançamento, avaliacao)
		VALUES(
        2, 
        'O Mensageiro do Último Dia', 
        'The Empty Man é um thriller de terror sobrenatural de 2020 escrito, dirigido e editado por David Prior, baseado na história em quadrinhos de Cullen Bunn e Vanesa R. Del Rey de mesmo nome publicada pela Boom! Studios.',
        '2020-01-14',
        0
        );

          INSERT INTO Filme(id, name, sinopse, data_de_lançamento, avaliacao)
		VALUES(
        3, 
        'Dois irmãos: Uma Jornada Fantástica', 
        'Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu falecido pai, capaz de trazê-lo de volta à vida.',
        '2020-03-05',
        10
        );

           INSERT INTO Filme(id, name, sinopse, data_de_lançamento, avaliacao)
		VALUES(
        4, 
        'Procurando Dory', 
        'Um ano após ajudar Marlin a reencontrar seu filho Nemo, Dory relembra sua amada família. Com saudades, decide fazer de tudo para reencontrá-los. ',
        '2016-06-30',
        9.5
        );
-- d)
	DELETE FROM Filme
		WHERE name = 'Annabelle';
        
	UPDATE Filme
		SET sinopse = 'Sem sinopse'
			WHERE id ='1';
	/*Nada é incluido no id 1, porque qnd foi deletado o nome, todo o conjunto foi junto*/


/* Questão 7 */

-- a) Retorna todos os filmes que tenham avaliação maior que 7.5
	SELECT * FROM Filme
		WHERE avaliacao > 7.5;
        
-- b) Retorna a Média de avaliações dos filmes
	SELECT AVG(avaliacao) FROM Filme;
    
-- c) Retorna a quantidade dos filmes em cartaz
	SELECT COUNT(*), nos_cinemas_ate
	FROM Filme
        WHERE nos_cinemas_ate = "Em cartaz";
        
-- d) Retorna a quantidade dos filmes que ainda vão lançar
	SELECT COUNT(*), nos_cinemas_ate
	FROM Filme
	WHERE nos_cinemas_ate = "Ainda vai lançar";   -- era pra usar data e usar o CURDATE() como referencia.

-- e) Maior nota entre os filmes
	SELECT MAX(avaliacao) FROM Filme;

-- f) Menor nota entre os filmes
	SELECT MIN(avaliacao) FROM Filme;
	
/* Questão 8 */

-- a) Retorno dos filmes em ordem alfabetica
	SELECT * FROM Filme
		Order by name;

-- b) Retorna os 5 primeiros em ordem decrescente
	SELECT * FROM Filme
		Order by name
        LIMIT 5;

-- c) Retorna os 3 primeiros filmes 
	SELECT * FROM Filme
		WHERE nos_cinemas_ate = "Em cartaz"
        ORDER BY nos_cinemas_ate DESC 
        LIMIT 3;
	/*SELECT * FROM Movie 
	WHERE release_date < CURDATE() 
	ORDER BY release_date DESC 
	LIMIT 3;*/
    
-- d) Retorna os 3 primeiros filmes com a avalição em ordem decrescente
	SELECT * FROM Filme 
	ORDER BY avaliacao DESC 
	LIMIT 3;