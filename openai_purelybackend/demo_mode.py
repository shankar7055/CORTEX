"""
Demo mode fallback when Gemini is not available.
Provides mock responses for testing the frontend.
"""

class DemoAIModules:
    """Mock AI modules for demo purposes when Gemini is unavailable."""
    
    def __init__(self):
        self.demo_data = {
            "total_revenue": 125000,
            "net_profit": 25000,
            "total_expenses": 100000,
            "growth_rate": 15.5,
            "total_orders": 450
        }
    
    def get_financial_insights(self):
        raw = {
            "TotalRevenue": float(self.demo_data["total_revenue"]),
            "TotalCOGS": float(self.demo_data["total_expenses"]) * 0.6,
            "GrossProfit": float(self.demo_data["total_revenue"]) - float(self.demo_data["total_expenses"]) * 0.6,
            "OperatingExpenses": float(self.demo_data["total_expenses"]) * 0.4,
            "NetProfit": float(self.demo_data["net_profit"]),
            "TotalSalesCount": 450,
            "TaxRate_Mock": 0.15,
            "EstimatedTaxPayable": max(0.0, float(self.demo_data["net_profit"]) * 0.15),
        }
        return {
            "raw_financial_data": raw,
            "ca_summary_report": "Demo Mode: Revenue is trending upward. Consider expanding marketing budget.",
        }
    
    def analyze_inventory_and_restock(self):
        low = [
            {"product_id": "P001", "name": "Demo Product A", "current_stock": 15, "dynamic_threshold": 50, "recommendation_qty": 85},
            {"product_id": "P002", "name": "Demo Product B", "current_stock": 8, "dynamic_threshold": 40, "recommendation_qty": 62},
        ]
        draft = (
            "Subject: Restock Request\n\n"
            "Please restock the following items:\n"
            "- Demo Product A: current 15, recommend 85\n"
            "- Demo Product B: current 8, recommend 62\n"
        )
        return {
            "low_stock_report": low,
            "restock_email_draft": draft,
            "trigger_action": "Email queued",
        }
    
    def get_active_customer_loyalty_rewards(self):
        return {
            "top_customers": [
                {"name": "Demo Customer 1", "total_spent": 5000},
                {"name": "Demo Customer 2", "total_spent": 3500},
                {"name": "Demo Customer 3", "total_spent": 2800}
            ]
        }
    
    def analyze_ecom_growth_and_trends(self):
        total_days = 30
        last7 = 28000
        avg_daily = self.demo_data["total_revenue"] / total_days
        series = []
        base = avg_daily
        for i in range(total_days):
            day = f"2024-12-{str(i + 1).zfill(2)}"
            val = round(base * (1 + ((i % 7) - 3) * 0.02), 2)
            series.append({"date": day, "revenue": val})
        return {
            "growth_metrics": {
                "TotalRevenue": float(self.demo_data["total_revenue"]),
                "TotalDaysTracked": total_days,
                "AverageDailyRevenue": round(avg_daily, 2),
                "Last7DayRevenue": float(last7),
                "Last7DayAvg": round(last7 / 7, 2),
                "Performance_vs_Average": "15.5%",
            },
            "daily_sales_data": series
        }

    def get_tax_deduction_advice(self):
        return {
            "expense_list": [
                {"description": "Marketing & Advertising", "amount": 45000},
                {"description": "Technology & Software", "amount": 48000},
            ],
            "tax_deduction_advice": "Demo Mode: Advertising and software subscriptions are typically deductible. Keep receipts and categorize expenses correctly."
        }

    def get_competitor_data(self):
        return [
            {"product_name": "Competitor Headphones", "price": 92.99},
            {"product_name": "Competitor Smart Watch", "price": 309.99},
        ]

    def analyze_sku_market_and_trend(self, competitor_data, product_id='P001'):
        internal_price = 89.99
        closest = min(competitor_data, key=lambda x: abs(x["price"] - internal_price)) if competitor_data else {"product_name": "Unknown", "price": internal_price}
        gap = round(internal_price - closest["price"], 2)
        rec = f"Increase price to 92.99; market supports a small premium (gap {gap})."
        return {
            "pricing_recommendation": rec,
            "internal_price": internal_price,
            "closest_competitor": closest,
            "price_gap": gap,
        }

    def get_inventory_trends(self, product_id='P001', days=30):
        series = [{"date": f"2024-12-{str(i+1).zfill(2)}", "quantity": (i % 5)} for i in range(days)]
        return {"product_id": product_id, "series": series}

    def get_invoice(self, purchase_id):
        return {
            "purchase_id": purchase_id,
            "customer": {"name": "Demo Customer", "email": "demo@example.com"},
            "items": [
                {"sku": "B07MCGRY7M", "name": "Premium Wireless Headphones", "qty": 1, "unit_price": 89.99},
                {"sku": "C99ZXY01", "name": "USB-C Charging Cable", "qty": 2, "unit_price": 12.99}
            ],
            "totals": {"subtotal": 115.97, "tax": 10.44, "grand_total": 126.41},
            "status": "Paid",
            "issued_on": "2024-12-15"
        }

def get_demo_chatbot_response(query):
    """Returns demo responses for common queries."""
    responses = {
        "revenue": "Demo Mode: Your current revenue is ₹125,000 with a growth rate of 15.5%.",
        "inventory": "Demo Mode: You have 2 products with low stock that need restocking.",
        "customers": "Demo Mode: Your top customer has spent ₹5,000 this month.",
        "default": "Demo Mode: I'm running in demo mode. Please configure your GEMINI_API_KEY for full functionality."
    }
    
    query_lower = query.lower()
    for key, response in responses.items():
        if key in query_lower:
            return response
    
    return responses["default"]