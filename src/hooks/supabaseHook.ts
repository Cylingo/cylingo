import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://ypvkgzjlhoerzavdxotx.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwdmtnempsaG9lcnphdmR4b3R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMTUyMDEsImV4cCI6MjA1ODU5MTIwMX0.c7RkfL43aP0NZcsFc-GvsXHcVpIBB1pPO8v_0Yd6PbU"
);

export const useCreateClient = () => {
	return supabase;
};