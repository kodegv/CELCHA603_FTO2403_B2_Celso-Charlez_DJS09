/**
 * Enum representing different levels of permissions within the system.
 */
export enum Permissions {
    /** 
   * Represents full administrative access, allowing all operations.
   */
    ADMIN = "ADMIN",
    /** 
   * Represents read-only access, restricting operations to viewing only.
   */
    READ_ONLY = "READ_ONLY",
  }
  
  /**
 * Enum representing different tiers of loyalty users within the system.
 */
  export enum LoyaltyUser {
    /** 
   * Represents a user with the highest loyalty tier: Gold.
   */
    GOLD_USER = "GOLD_USER",
    /** 
   * Represents a user with the second-highest loyalty tier: Silver.
   */
    SILVER_USER = "SILVER_USER",
    /** 
   * Represents a user with the base loyalty tier: Bronze.
   */
    BRONZE_USER = "BRONZE_USER",
  }