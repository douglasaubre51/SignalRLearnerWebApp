using System;
using Microsoft.AspNetCore.SignalR;

namespace SignalRLearnerWebApp.Hubs;

public class UserHub : Hub
{
    public static int TotalViews { get; set; } = 0;

    public async Task NewWindowLoaded()
    {
        TotalViews++;
        //calls this method from client side
        await Clients.All.SendAsync("updateTotalViews", TotalViews);
    }

}
