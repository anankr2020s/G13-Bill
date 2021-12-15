package main

import (
	"github.com/gin-gonic/gin"
	"github.com/phu024/G13-Outpatient-Management/controller"
	"github.com/phu024/G13-Outpatient-Management/entity"
	"github.com/phu024/G13-Outpatient-Management/middlewares"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	api := r.Group("")
	{
		
		protected := api.Use(middlewares.Authorizes())
		{

			//Patient Routes

			protected.GET("/patients", controller.ListPatients)
            protected.GET("/patient/:id", controller.GetPatient)

			//Examinations Routes
			protected.GET("/bill/examination/:id", controller.GetBExamination)

			//PatientRight Routes
			protected.GET("/bill/patientrights", controller.ListPatientRights)
			protected.GET("/bill/patientright/:id", controller.GetPatientRight)

			//Crashier Routes
			protected.GET("/bill/cashiers", controller.ListCashiers)
			protected.GET("/bill/cashier/:id", controller.GetCashier)

			//Bill Routes
			protected.GET("/bills", controller.ListBills)
			protected.GET("/bill/:id", controller.GetBill)
			protected.POST("/billCreate", controller.CreateBill)
			protected.PATCH("/bills", controller.UpdateBill)
			protected.DELETE("/bills/:id", controller.DeleteBill)
		}

	}

	// Authentication Routes
	r.POST("/bill/login", controller.LoginCashier)
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
