<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center"><b>SerCom:</b> Ecosistema transaccional de alto impacto para la profesionalización del trabajo informal en Colombia.</p>

<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://supabase.com/" target="_blank"><img src="https://img.shields.io/badge/Database-Supabase-3ECF8E?style=flat&logo=supabase" alt="Supabase" /></a>
<a href="https://nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/built%20with-NestJS-E0234E?style=flat&logo=nestjs" alt="Built with NestJS" /></a>
</p>

## Arquitectura: The Onion Standard ~Clean Architecture

Este proyecto esta diseñado bajo la Arquitectura de Cebolla (Onion Architecture). Esto permite desacoplar la lógica de negocio de la tecnología, asegurando que el sistema sea testeable y escalable.

## Guía de Inicio Rápido

### Instalación
```bash
$ npm install
```

```bash
# Modo desarrollo ~con recarga automática
$ npm run start:dev

# Modo producción
$ npm run start:prod

```
### Testing

```bash
# Unit tests ~Validación de Dominios y Casos de Uso 
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

SerCom es el corazon transaccional de un ecosistema diseñado para transformar la informalidad laboral en Colombia mediante la profesionalización, la confianza verificable y la innovación tecnológica.

## Mapa de Capas y Responsabilidades

* **Domain (domain/):** El corazón. Contiene las Entidades puras (ej. Profile, Mission, ServiceProposal) y las Interfaces de los repositorios.
    * **Regla:** No se permiten dependencias externas en esta capa.
* **Application (application/):** Los Casos de Uso. Aquí vive la orquestación de la lógica (ej. CreateProposalUseCase, InvokeHelperUseCase).
* **Infrastructure (infrastructure/):** La capa tecnológica. Implementa el acceso a datos mediante Supabase, el sistema de autenticación, e integraciones con Google Vertex AI.
* **Interfaces (interfaces/):** La puerta de entrada. Controladores REST que gestionan peticiones y respuestas HTTP, delegando la lógica a los Casos de Uso.

## Stack Tecnológico Seleccionado

* **NestJS:** Framework para Node.js que facilita la Inyección de Dependencias.
* **Supabase (PostgreSQL):** Base de datos relacional, almacenamiento de archivos para certificaciones y autenticación.
* **Gemini AI API:** Implementación de Function Calling para el chatbot de diagnóstico inteligente.
* **Wompi/PSE Integration:** Pasarela de pagos para el sistema de Escrow (Pagos Protegidos).

## Regla de Oro para Desarrolladores

"Dependency rule: Flow points inward."
1.  domain no conoce a ninguna otra capa.
2.  application solo conoce al domain.
3.  infrastructure implementa lo que el domain define en sus interfaces.
4.  Antes de crear una tabla: definir la Entidad en `domain/entities` y su Interfaz en `domain/repositories`.
Nunca comiences acoplando la lógica de la base de datos a los endpoints; primero, modélalo en el dominio de la empresa.

## Equipo de Ingeniería

* **Luis Cadena:** Product Owner / Architect
* **Santiago Grajales:** Scrum Master / Lead Dev
* **Isabella:** UX/UI Lead
* **Samuel:** Backend Manager
* **Melissa:** Configuration Manager
* **Valentina:** QA & Risk Manager

Desarrollado bajo estándares de acreditación ABET - Universidad Icesi.
