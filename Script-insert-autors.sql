
Create database PSLibrary
Go

USE [PSLibrary]
GO

CREATE TABLE [dbo].[books](
	[id] [int] NOT NULL,
	[title] [varchar](255) NULL,
	[author] [varchar](255) NULL
) 
GO


insert into books(id, title, author) VALUES
(866618, 'El principito','Antoine De Saint Exupery'),
(5470, '1984', 'George Orwell'),
(3360761, 'El caballero de la armadura oxidada', 'Robert Fisher'),
(3228917, 'Los fuera de serie', 'Malcolm Gladwell'),


(20325243, 'Un mundo feliz', 'Aldous Huxley'),
(10576, 'It', 'Stephen King'),
(30293393, 'Así habló zaratustra', 'Friedrich Nietzsche'),
(500400, 'El amor en los tiempos del cólera', 'Gabriel García Márquez'),
(57404, 'Don Quijote de La Mancha', 'Miguel de Cervantes'),
(7051567, 'De la máquina de vapor al cero absoluto', 'Fondo de Cultura Económica')

Go