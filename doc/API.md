accounts
========
Endpoint for  user accounts, authentication, and authorization

**Version:** 1.0.0

### /login
---
##### ***POST***
**Summary:** authenticates user

**Description:** authenticates user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | login info | Yes | [login](#login) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | login success | [user](#user) |
| 401 | account deactivated |
| 404 | user not found |
| 422 | invalid password |
| 500 | internal server error |

### /register
---
##### ***POST***
**Summary:** user registration

**Description:** register a new user

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | new user info | Yes | [register](#register) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | register success | [user-sanitized](#usersanitized) |
| 400 | bad request |
| 500 | internal server error |


### /surveys/
---
##### ***POST***
**Summary:** survey creation

**Description:** create a new survey

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | new survey info | Yes | [survey-new](#surveynew) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | create success | [survey-sanitized](#surveysanitized) |
| 401 | not authorized |
| 400 | bad request |
| 500 | internal server error |


### /surveys/{id}
---
##### ***GET***
**Summary:** Retrieve survey  by id

**Description:** Retrieve a survey by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | retrieve info of a survey | [survey-sanitized](#surveysanitized) |
| 401 | not authorized |
| 404 | survey not found |
| 500 | internal server error |


### /survey/{id}
---
##### ***PATCH***
**Summary:** Update a survey with id

**Description:** Update an survey with id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| body | body | new survey attributes | Yes | [survey-new](#surveynew) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | return updated survey | [survey-sanitized](#surveysanitized) |
| 401 | not authorized |
| 404 | survey not found |
| 400 | bad request |
| 500 | internal server error |

### /surveys/
---
##### ***GET***
**Summary:** Retrieve a list of surveys

**Description:** get a list of all surveys

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filter | query |  | No | object |
| limit | query |  | No | number |
| skip | query |  | No | number |
| search | query |  | No | string |
| sort | query |  | No | object |
| fields | query |  | No | singleOrArray |


**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | return a list of surveys | [survey-sanitized](#surveysanitized) |
| 401 | not authorized |
| 500 | internal server error |


### /surveys/{id}
---
##### ***DELETE***
**Summary:** Delete a survey

**Description:** Delete a survey

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | empty body |  |
| 401 | not authorized |
| 400 | cannot delete survey  |
| 404 | survey not found |
| 500 | internal server error |


### /answers/
---
##### ***POST***
**Summary:** answer creation

**Description:** create a new answer

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| body | body | new answer info | Yes | [answer-new](#answernew) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | create success | [answer-sanitized](#answersanitized) |
| 401 | not authorized |
| 400 | bad request |
| 500 | internal server error |


### /answers/{id}
---
##### ***GET***
**Summary:** Retrieve answer  by id

**Description:** Retrieve a answer by id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | retrieve info of an answer | [answer-sanitized](#answersanitized) |
| 401 | not authorized |
| 404 | answer not found |
| 500 | internal server error |


### /answers/{id}
---
##### ***PATCH***
**Summary:** Update an answer with id

**Description:** Update an answer with id

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |
| body | body | new answer attributes | Yes | [answer-new](#answernew) |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | return updated answer | [answer-sanitized](#answersanitized) |
| 401 | not authorized |
| 404 | answer not found |
| 400 | bad request |
| 500 | internal server error |

### /answers/
---
##### ***GET***
**Summary:** Retrieve a list of answers

**Description:** get a list of all answers

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| filter | query |  | No | object |
| limit | query |  | No | number |
| skip | query |  | No | number |
| search | query |  | No | string |
| sort | query |  | No | object |
| fields | query |  | No | singleOrArray |


**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | return a list of answers | [answer-sanitized](#answersanitized) |
| 401 | not authorized |
| 500 | internal server error |


### /surveys/{id}
---
##### ***DELETE***
**Summary:** Delete an answer

**Description:** Delete an answer

**Parameters**

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path |  | Yes | string |

**Responses**

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 204 | empty body |  |
| 401 | not authorized |
| 400 | cannot delete answer  |
| 404 | answer not found |
| 500 | internal server error |

### Models
---

<a name="login"></a>**login**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| email | string |  | Yes |
| password | string |  | Yes |
<a name="register"></a>**register**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| payload | [user-new](#usernew) |  | yes |
<a name="user"></a>**user**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| user | [user-sanitized](#usersanitized) |  | No |
| token | string(token) |  | No |

<a name="username"></a>**user-name**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| first | string |  | Yes |
| middle | string |  | No |
| last | string |  | Yes |
<a name="usernew"></a>**user-new**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| name | [user-name](#username) |  | Yes |
| email | string |  | Yes |
| password | string |  | Yes |
| position | string |  | Yes |
<a name="usersanitized"></a>**user-sanitized**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| email | string |  | No |
| name | [user-name](#username) |  | No |
| position | string |  | No |
| createdAt | Date(ISO String) |  | No |
| updatedAt | Date(ISO String) |  | No |
<a name="errorgeneric"></a>**error-generic**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| code | integer |  | No |
| message | string |  | No |
| fields | string |  | No |


<a name="newdocinfo"></a>**new-docinfo**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| createdBy | string |  | No |
| updatedBy | string |  | No |
| createdAt | Date(ISO String) |  | No |
| updatedAt | Date(ISO String) |  | No |

<a name="surveynew"></a>**survey-new**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| title | string |  | Yes |
| question | string |  | Yes |

<a name="surveysanitized"></a>**survey-sanitized**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| title | string |  | No |
| question | string|  | No |
| docInfo | [new-docinfo](#newdocinfo) |  | No |

<a name="answernew"></a>**answer-new**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| answer | string |  | Yes |
| survey_id | string |  | Yes |

<a name="answersanitized"></a>**answer-sanitized**

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |
| answer | string |  | No |
| survey_id | string|  | No |
| docInfo | [new-docinfo](#newdocinfo) |  | No |



