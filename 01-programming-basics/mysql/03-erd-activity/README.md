# Web Application Schema Design Activity

**Objectives**
- Understand and apply MySQL data types.
- Practice normalization techniques.
- Design relationships (1:1, 1:n, n:m) between entities.
- Develop teamwork and presentation skills.

## Instructions
The class will be split randomly into three teams.

**Brainstorming (15-20 minutes)**
- In your teams, come up with an idea for a web application. Examples:
  - Library management system
  - Online store
  - Social media platform
  - Project management tool
- Outline the main features and functionality of your application.

**Identify Entities and Attributes (20-30 minutes)**
- List the entities (tables) required for your application (e.g., Users, Orders, Products).
- For each entity, identify the attributes (columns) and their respective data types.

**Define Relationships (20-30 minutes)**
- Determine the relationships between entities (e.g., Users have Orders, Orders contain Products).
- Decide the type of each relationship (1:1, 1:n, n:m) and how they will be implemented using foreign keys.

**Normalization (20-30 minutes)**
- Normalize your schema to at least the 3rd normal form (3NF). Check for redundancy and ensure each table is properly structured.

**Create ERD in MySQL Workbench (30-45 minutes)**
- Use MySQL Workbench to create an ERD based on your schema.
- Include primary keys, foreign keys, and data types.

**Presentation (5-10 minutes per team)**
- Present your web application idea and explain your ERD.
- Discuss your design choices, any challenges faced, and how you resolved them.

**Feedback and Discussion (10-15 minutes)**
- Participate in a class discussion to provide and receive constructive feedback.
- Highlight good practices and common pitfalls.

## Tips for Success
- Be creative but keep your application simple enough to manage within the timeframe.
- Ask for assistance if you have any technical questions or challenges.
- Use real-world examples to explain concepts where possible.

---

**Example: Online Store Schema**

#**Entities and Attributes**
- **users**
  - id (Primary Key)
  - username
  - email
  - password
  - created_at
  - updated_at

- **products**
  - id (Primary Key)
  - name
  - description
  - price
  - created_at
  - updated_at

- **orders**
  - id (Primary Key)
  - user_id (Foreign Key to Users)
  - order_date
  - created_at
  - updated_at

- **order_items**
  - id (Primary Key)
  - order_id (Foreign Key to Orders)
  - product_id (Foreign Key to Products)
  - quantity
  - created_at
  - updated_at

**Relationships**
- **Users to Orders**: 1:n (One user can have multiple orders)
- **Orders to OrderItems**: 1:n (One order can have multiple order items)
- **Products to OrderItems**: 1:n (One product can appear in multiple order items)
